"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarLeft } from "@/components/sidebar-left";
import { IoSearchOutline, IoPersonCircleOutline } from "react-icons/io5";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-svh flex bg-background text-foreground">
        <SidebarLeft />
        <div className="flex-1 flex flex-col">
          {/* Topbar */}
          <header className="border-b border-border flex items-center justify-between px-6 h-16">
            <div className="relative">
              <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                className="w-80 rounded-md bg-card border border-border pl-10 pr-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Search..."
              />
            </div>
            <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
              <IoPersonCircleOutline className="h-7 w-7 text-primary-foreground" />
            </div>
          </header>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}