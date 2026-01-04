/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Main App component with routing
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import HallOfFame from "./pages/HallOfFame";
import About from "./pages/About";
import Chefs from "./pages/Chefs";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/eventos" component={Events} />
      <Route path="/evento/:id" component={EventDetail} />
      <Route path="/hall-of-fame" component={HallOfFame} />
      <Route path="/nosotros" component={About} />
      <Route path="/cocineros" component={Chefs} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
