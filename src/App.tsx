import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TestBooking from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes> 
          {/* Default redirect to Dutch */} 
          <Route path="/" element={<Navigate to="/nl/test" replace />} /> 
          
          {/* Localized test booking pages */} 
          <Route path="/:lang/test" element={<TestBooking />} /> 
          
          {/* Home redirects for each locale */} 
          <Route path="/nl" element={<Navigate to="/nl/test" replace />}/> 
          <Route path="/en" element={<Navigate to="/en/test" replace />}/> 
          {/* Catch-all 404 */} 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
