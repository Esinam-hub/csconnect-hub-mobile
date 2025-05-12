
import React from "react";
import Navigation from "./Navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      {!isMobile && <Navigation />}
      <main className={cn(
        "flex-1",
        isMobile && "pb-20" // Add padding at bottom for mobile navigation
      )}>
        {children}
      </main>
      {isMobile && <Navigation />}
    </div>
  );
}
