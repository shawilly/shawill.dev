"use client";
import { Sidebar } from "@/components/sidebar/sidebar";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "zustand";
import { Button } from "./ui/button";

export function BasePage({ children }: { children: React.ReactNode }) {
  const { setTheme, theme } = useTheme();
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Sidebar />
      <ToastContainer />
      <div className="fixed top-12 right-12">
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Button
                className="rounded-full w-8 h-8 bg-background mr-2"
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
                <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
                <span className="sr-only">Switch Theme</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Switch Theme</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <main
        className={cn(
          "flex flex-col gap-8 row-start-2 items-center sm:items-start transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        {children}
      </main>
    </div>
  );
}
