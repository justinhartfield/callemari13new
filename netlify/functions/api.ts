import "dotenv/config";
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../server/routers";

// Create a minimal context for Netlify functions
const createContext = () => ({
  user: null,
  req: null as any,
  res: null as any,
});

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      body: "",
    };
  }

  try {
    // Extract the path after /api/trpc or /.netlify/functions/api/trpc
    let path = event.path;
    
    // Remove function prefix if present
    if (path.startsWith("/.netlify/functions/api")) {
      path = path.replace("/.netlify/functions/api", "");
    }
    if (path.startsWith("/api")) {
      path = path.replace("/api", "");
    }

    // Build the full URL for the fetch adapter
    const url = new URL(path, `https://${event.headers.host || "localhost"}`);
    
    // Add query parameters
    if (event.queryStringParameters) {
      Object.entries(event.queryStringParameters).forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value);
      });
    }

    // Create a Request object for the fetch adapter
    const request = new Request(url.toString(), {
      method: event.httpMethod,
      headers: new Headers(event.headers as Record<string, string>),
      body: event.body ? event.body : undefined,
    });

    // Use the fetch adapter to handle the request
    const response = await fetchRequestHandler({
      endpoint: "/trpc",
      req: request,
      router: appRouter,
      createContext,
    });

    // Convert the Response to Netlify function format
    const responseBody = await response.text();
    
    return {
      statusCode: response.status,
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      body: responseBody,
    };
  } catch (error) {
    console.error("Netlify function error:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        error: "Internal Server Error",
        message: error instanceof Error ? error.message : "Unknown error"
      }),
    };
  }
};
