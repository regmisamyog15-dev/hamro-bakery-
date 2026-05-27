import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { BranchProvider } from "@/context/BranchContext";
import { useEffect } from "react";

const queryClient = new QueryClient();

function FestiveMode() {
  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1; // 1-12
    const day = date.getDate();

    let particleColor = "";
    let particleCount = 0;
    
    if (month === 8 || month === 9) { // Teej
      particleColor = "bg-red-500 shadow-[0_0_10px_red]";
      particleCount = 15;
    } else if (month === 10) { // Dashain
      particleColor = "bg-red-600 shadow-[0_0_10px_red]";
      particleCount = 20;
    } else if (month === 11) { // Tihar
      particleColor = "bg-orange-400 shadow-[0_0_15px_orange]";
      particleCount = 25;
    } else if (month === 2) { // Losar
      particleColor = "bg-gradient-to-r from-pink-500 to-yellow-500";
      particleCount = 15;
    } else if (month === 12 && day >= 20) { // Christmas
      particleColor = "bg-white shadow-[0_0_10px_white]";
      particleCount = 20;
    }

    if (!particleColor) return;

    const container = document.createElement("div");
    container.className = "fixed inset-0 pointer-events-none z-50 overflow-hidden";
    document.body.appendChild(container);

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.className = `particle absolute rounded-full ${particleColor}`;
      p.style.left = `${Math.random() * 100}vw`;
      p.style.width = `${Math.random() * 6 + 4}px`;
      p.style.height = p.style.width;
      p.style.animationDuration = `${Math.random() * 5 + 5}s`;
      p.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(p);
    }

    return () => {
      document.body.removeChild(container);
    };
  }, []);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BranchProvider>
          <FestiveMode />
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </BranchProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
