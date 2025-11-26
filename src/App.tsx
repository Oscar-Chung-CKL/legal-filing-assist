import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskDetail from "./pages/TaskDetail";
import SelectSolution from "./pages/SelectSolution";
import SolutionResult from "./pages/SolutionResult";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/urgent-legal-filings" element={<TaskDetail />} />
          <Route path="/task/urgent-legal-filings/select-solution" element={<SelectSolution />} />
          <Route path="/task/urgent-legal-filings/solution-result" element={<SolutionResult />} />
          <Route path="/task/pricing-strategy" element={<TaskDetail />} />
          <Route path="/task/supply-chain" element={<TaskDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
