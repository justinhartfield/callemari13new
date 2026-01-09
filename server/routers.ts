import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { eq, desc } from "drizzle-orm";
import { getDb } from "./db";
import { events, foodItems, chefs, siteSettings } from "../drizzle/schema";
import { seedDatabase } from "./seed";
import { storagePut } from "./storage";
import { ENV } from "./_core/env";

// Ideogram API configuration
const IDEOGRAM_API_URL = "https://api.ideogram.ai/v1/ideogram-v3/generate";

// Events Router
const eventsRouter = router({
  list: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    const result = await db.select().from(events).orderBy(desc(events.date));
    return result;
  }),

  get: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;
      const result = await db.select().from(events).where(eq(events.id, input.id)).limit(1);
      return result[0] || null;
    }),

  create: publicProcedure
    .input(z.object({
      title: z.string().min(1),
      date: z.string().min(1),
      description: z.string().optional(),
      image: z.string().optional(),
      gallery: z.array(z.string()).optional(),
      menuItems: z.array(z.string()).optional(),
      chef: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const result = await db.insert(events).values({
        title: input.title,
        date: input.date,
        description: input.description || null,
        image: input.image || null,
        gallery: input.gallery || null,
        menuItems: input.menuItems || null,
        chef: input.chef || null,
      });
      return { id: result[0].insertId };
    }),

  update: publicProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().min(1).optional(),
      date: z.string().min(1).optional(),
      description: z.string().optional(),
      image: z.string().optional(),
      gallery: z.array(z.string()).optional(),
      menuItems: z.array(z.string()).optional(),
      chef: z.string().optional(),
      isPublished: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const { id, ...data } = input;
      await db.update(events).set(data).where(eq(events.id, id));
      return { success: true };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      await db.delete(events).where(eq(events.id, input.id));
      return { success: true };
    }),
});

// Food Items Router
const foodItemsRouter = router({
  list: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    const result = await db.select().from(foodItems).orderBy(foodItems.category, foodItems.rank);
    return result;
  }),

  get: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;
      const result = await db.select().from(foodItems).where(eq(foodItems.id, input.id)).limit(1);
      return result[0] || null;
    }),

  create: publicProcedure
    .input(z.object({
      name: z.string().min(1),
      description: z.string().optional(),
      image: z.string().optional(),
      category: z.string().optional(),
      chef: z.string().optional(),
      eventId: z.number().optional(),
      rank: z.number().optional().nullable(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const result = await db.insert(foodItems).values({
        name: input.name,
        description: input.description || null,
        image: input.image || null,
        category: input.category || null,
        chef: input.chef || null,
        eventId: input.eventId || null,
        rank: input.rank || null,
      });
      return { id: result[0].insertId };
    }),

  update: publicProcedure
    .input(z.object({
      id: z.number(),
      name: z.string().min(1).optional(),
      description: z.string().optional(),
      image: z.string().optional(),
      category: z.string().optional(),
      chef: z.string().optional(),
      eventId: z.number().optional(),
      rank: z.number().optional().nullable(),
      isPublished: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const { id, ...data } = input;
      await db.update(foodItems).set(data).where(eq(foodItems.id, id));
      return { success: true };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      await db.delete(foodItems).where(eq(foodItems.id, input.id));
      return { success: true };
    }),
});

// Chefs Router
const chefsRouter = router({
  list: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    const result = await db.select().from(chefs).orderBy(desc(chefs.eventsHosted));
    return result;
  }),

  get: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;
      const result = await db.select().from(chefs).where(eq(chefs.id, input.id)).limit(1);
      return result[0] || null;
    }),

  create: publicProcedure
    .input(z.object({
      name: z.string().min(1),
      nickname: z.string().optional(),
      avatar: z.string().optional(),
      bio: z.string().optional(),
      specialty: z.string().optional(),
      signatureDishes: z.array(z.string()).optional(),
      eventsHosted: z.number().optional(),
      dishesCreated: z.number().optional(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const result = await db.insert(chefs).values({
        name: input.name,
        nickname: input.nickname || null,
        avatar: input.avatar || null,
        bio: input.bio || null,
        specialty: input.specialty || null,
        signatureDishes: input.signatureDishes || null,
        eventsHosted: input.eventsHosted || 0,
        dishesCreated: input.dishesCreated || 0,
      });
      return { id: result[0].insertId };
    }),

  update: publicProcedure
    .input(z.object({
      id: z.number(),
      name: z.string().min(1).optional(),
      nickname: z.string().optional(),
      avatar: z.string().optional(),
      bio: z.string().optional(),
      specialty: z.string().optional(),
      signatureDishes: z.array(z.string()).optional(),
      eventsHosted: z.number().optional(),
      dishesCreated: z.number().optional(),
      isActive: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const { id, ...data } = input;
      await db.update(chefs).set(data).where(eq(chefs.id, id));
      return { success: true };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      await db.delete(chefs).where(eq(chefs.id, input.id));
      return { success: true };
    }),
});

// Upload Router
const uploadRouter = router({
  image: publicProcedure
    .input(z.object({
      filename: z.string(),
      data: z.string(), // base64 encoded
      contentType: z.string().default("image/jpeg"),
    }))
    .mutation(async ({ input }) => {
      // Decode base64 data
      const buffer = Buffer.from(input.data, "base64");
      
      // Generate unique filename with timestamp
      const timestamp = Date.now();
      const ext = input.filename.split(".").pop() || "jpg";
      const uniqueFilename = `uploads/${timestamp}-${input.filename.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      
      // Upload to S3
      const result = await storagePut(uniqueFilename, buffer, input.contentType);
      
      return { url: result.url, key: result.key };
    }),
});

// Ideogram Image Generation Router
const ideogramRouter = router({
  // Generate multiple images - one per menu item (up to 4)
  generateMultiple: publicProcedure
    .input(z.object({
      title: z.string().min(1),
      menuItems: z.array(z.string()),
      chef: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      if (!ENV.ideogramApiKey) {
        throw new Error("Ideogram API key not configured. Set IDEOGRAM_API_KEY environment variable.");
      }
      
      // Check Bunny.net credentials
      if (!ENV.bunnyStorageZone || !ENV.bunnyStorageApiKey || !ENV.bunnyCdnUrl) {
        throw new Error("Bunny.net storage not configured. Set BUNNY_STORAGE_ZONE, BUNNY_STORAGE_API_KEY, and BUNNY_CDN_URL environment variables.");
      }

      // Take up to 4 menu items
      const itemsToGenerate = input.menuItems.slice(0, 4);
      if (itemsToGenerate.length === 0) {
        throw new Error("Please add at least one menu item to generate images");
      }

      const results: { menuItem: string; imageUrl: string; prompt: string }[] = [];
      const timestamp = Date.now();

      // Generate one image per menu item
      for (let i = 0; i < itemsToGenerate.length; i++) {
        const menuItem = itemsToGenerate[i];
        
        // Build a food-focused prompt for this specific dish
        const prompt = `Professional food photography of ${menuItem}, Spanish almorzar style. Single dish hero shot, rustic wooden table, warm Mediterranean lighting, Valencia Spain aesthetic, appetizing presentation, high-end restaurant quality, editorial food photography, shallow depth of field, natural lighting. Style: warm, inviting, authentic Spanish cuisine.`;

        try {
          // Call Ideogram API
          const response = await fetch(IDEOGRAM_API_URL, {
            method: "POST",
            headers: {
              "Api-Key": ENV.ideogramApiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt,
              aspect_ratio: "1x1",
              rendering_speed: "DEFAULT",
              magic_prompt: "AUTO",
              num_images: 1,
            }),
          });

          if (!response.ok) {
            const errorText = await response.text();
            console.error(`Ideogram API error for ${menuItem}: ${response.status} - ${errorText}`);
            continue; // Skip this item but continue with others
          }

          const data = await response.json();
          
          // Get the generated image URL
          const imageUrl = data.data?.[0]?.url;
          if (!imageUrl) {
            console.error(`No image URL for ${menuItem}`);
            continue;
          }

          // Download the image from Ideogram
          const imageResponse = await fetch(imageUrl);
          if (!imageResponse.ok) {
            console.error(`Failed to download image for ${menuItem}`);
            continue;
          }
          const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

          // Create a safe filename from the menu item
          const safeFilename = menuItem
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
            .substring(0, 30);
          const filename = `generated/menu-${timestamp}-${i}-${safeFilename}.jpg`;
          
          // Upload to Bunny.net Storage
          const bunnyUploadUrl = `https://storage.bunnycdn.com/${ENV.bunnyStorageZone}/${filename}`;
          const uploadResponse = await fetch(bunnyUploadUrl, {
            method: "PUT",
            headers: {
              "AccessKey": ENV.bunnyStorageApiKey,
              "Content-Type": "image/jpeg",
            },
            body: imageBuffer,
          });
          
          if (!uploadResponse.ok) {
            const errorText = await uploadResponse.text();
            console.error(`Bunny.net upload failed for ${menuItem}: ${uploadResponse.status} - ${errorText}`);
            continue;
          }
          
          // Add to results
          const cdnUrl = `${ENV.bunnyCdnUrl.replace(/\/$/, '')}/${filename}`;
          results.push({
            menuItem,
            imageUrl: cdnUrl,
            prompt,
          });
        } catch (error) {
          console.error(`Error generating image for ${menuItem}:`, error);
          continue;
        }
      }

      if (results.length === 0) {
        throw new Error("Failed to generate any images. Please try again.");
      }

      return {
        success: true,
        images: results,
        count: results.length,
      };
    }),

  // Keep the single image generation for backward compatibility
  generate: publicProcedure
    .input(z.object({
      title: z.string().min(1),
      menuItems: z.array(z.string()).optional(),
      chef: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      if (!ENV.ideogramApiKey) {
        throw new Error("Ideogram API key not configured. Set IDEOGRAM_API_KEY environment variable.");
      }

      // Build a food-focused prompt from the event data
      const menuText = input.menuItems?.length 
        ? input.menuItems.slice(0, 4).join(", ")
        : "traditional Spanish almorzar";
      
      const prompt = `Professional food photography of a Spanish almorzar feast featuring ${menuText}. Rustic wooden table setting, warm Mediterranean lighting, Valencia Spain style, appetizing presentation, high-end restaurant quality, editorial food photography, shallow depth of field, natural lighting from window. Title: "${input.title}". Style: warm, inviting, authentic Spanish cuisine.`;

      try {
        // Call Ideogram API
        const response = await fetch(IDEOGRAM_API_URL, {
          method: "POST",
          headers: {
            "Api-Key": ENV.ideogramApiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
            aspect_ratio: "16x9",
            rendering_speed: "DEFAULT",
            magic_prompt: "AUTO",
            num_images: 1,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Ideogram API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        
        // Get the generated image URL
        const imageUrl = data.data?.[0]?.url;
        if (!imageUrl) {
          throw new Error("No image URL in Ideogram response");
        }

        // Download the image from Ideogram
        const imageResponse = await fetch(imageUrl);
        if (!imageResponse.ok) {
          throw new Error("Failed to download generated image");
        }
        const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

        // Upload to Bunny.net storage
        const timestamp = Date.now();
        const filename = `generated/image-of-week-${timestamp}.jpg`;
        
        // Check Bunny.net credentials
        if (!ENV.bunnyStorageZone || !ENV.bunnyStorageApiKey || !ENV.bunnyCdnUrl) {
          throw new Error("Bunny.net storage not configured. Set BUNNY_STORAGE_ZONE, BUNNY_STORAGE_API_KEY, and BUNNY_CDN_URL environment variables.");
        }
        
        // Upload to Bunny.net Storage
        const bunnyUploadUrl = `https://storage.bunnycdn.com/${ENV.bunnyStorageZone}/${filename}`;
        const uploadResponse = await fetch(bunnyUploadUrl, {
          method: "PUT",
          headers: {
            "AccessKey": ENV.bunnyStorageApiKey,
            "Content-Type": "image/jpeg",
          },
          body: imageBuffer,
        });
        
        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          throw new Error(`Bunny.net upload failed: ${uploadResponse.status} - ${errorText}`);
        }
        
        // Return the CDN URL
        const cdnUrl = `${ENV.bunnyCdnUrl.replace(/\/$/, '')}/${filename}`;

        return {
          success: true,
          imageUrl: cdnUrl,
          prompt,
        };
      } catch (error) {
        console.error("Ideogram generation error:", error);
        throw error;
      }
    }),
});

// Settings Router - Uses Bunny.net storage instead of database
const settingsRouter = router({
  get: publicProcedure
    .input(z.object({ key: z.string() }))
    .query(async ({ input }) => {
      // Try to fetch from Bunny.net CDN
      const cdnUrl = ENV.bunnyCdnUrl || "https://cfls.b-cdn.net";
      try {
        const response = await fetch(`${cdnUrl}/settings/${input.key}.json?t=${Date.now()}`);
        if (response.ok) {
          const data = await response.json();
          return { id: 1, key: input.key, value: JSON.stringify(data), updatedAt: new Date() };
        }
      } catch (e) {
        // File doesn't exist yet, return null
      }
      return null;
    }),

  set: publicProcedure
    .input(z.object({
      key: z.string().min(1),
      value: z.string(),
    }))
    .mutation(async ({ input }) => {
      // Save to Bunny.net storage
      const storageZone = ENV.bunnyStorageZone;
      const apiKey = ENV.bunnyStorageApiKey;
      
      if (!storageZone || !apiKey) {
        throw new Error("Bunny.net storage not configured");
      }
      
      const fileName = `settings/${input.key}.json`;
      const uploadUrl = `https://storage.bunnycdn.com/${storageZone}/${fileName}`;
      
      const response = await fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "AccessKey": apiKey,
          "Content-Type": "application/json",
        },
        body: input.value,
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to save settings: ${errorText}`);
      }
      
      return { success: true };
    }),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Seed endpoint (one-time use)
  seed: router({
    run: publicProcedure.mutation(async () => {
      const results = await seedDatabase();
      return results;
    }),
  }),

  // Feature routers
  events: eventsRouter,
  foodItems: foodItemsRouter,
  chefs: chefsRouter,
  settings: settingsRouter,
  upload: uploadRouter,
  ideogram: ideogramRouter,
});

export type AppRouter = typeof appRouter;
