"use client";
import { Sidebar } from "@/components/sidebar";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { cn } from "@/lib/utils";
import { useStore } from "zustand";
import { Footer } from "./footer";

export function BasePage({ children }: { children: React.ReactNode }) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Sidebar />
      <main
        className={cn(
          "flex flex-col gap-8 row-start-2 items-center sm:items-start transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
