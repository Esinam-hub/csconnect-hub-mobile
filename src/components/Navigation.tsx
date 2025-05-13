
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookText, Users, Newspaper, Calendar, Download, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", path: "/" },
  { icon: BookText, label: "Courses", path: "/courses" },
  { icon: Users, label: "Faculty", path: "/faculty" },
  { icon: Newspaper, label: "News", path: "/news" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: Download, label: "Timetable", path: "/timetable" },
  { icon: Mail, label: "Contact", path: "/contact" },
];

export default function Navigation() {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  return (
    <nav className={cn(
      "bg-white dark:bg-gray-900 shadow-md",
      isMobile 
        ? "fixed bottom-0 left-0 right-0 p-1 z-50" 
        : "sticky top-0 z-50 py-3 px-4"
    )}>
      <div className="container mx-auto">
        <div className={cn(
          "flex items-center",
          isMobile ? "justify-around" : "justify-between"
        )}>
          {!isMobile && (
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/b794b8c5-65b8-49d2-960d-b3e53afb6fa1.png" 
                alt="CSS Logo" 
                className="h-10 w-10"
              />
              <span className="font-semibold text-xl">Connect</span>
            </Link>
          )}
          
          <div className={cn(
            "flex",
            isMobile ? "w-full justify-around" : "gap-2"
          )}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return isMobile ? (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg",
                    isActive 
                      ? "text-csblue" 
                      : "text-gray-500 hover:text-csblue"
                  )}
                >
                  <item.icon size={20} />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              ) : (
                <Button
                  key={item.path}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                >
                  <Link to={item.path} className="gap-2">
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
