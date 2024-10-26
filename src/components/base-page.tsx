"use client";
import { Sidebar } from "@/components/sidebar/sidebar";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "zustand";
import { Button } from "./ui/button";
import Footer from "./footer";

export function BasePage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  const { setTheme, theme } = useTheme();
  const sidebar = useStore(useSidebarToggle, (state) => state);

  return (
    <>
      <Sidebar />
      <ToastContainer />
      <div className="absolute top-4 right-4 lg:max-h-[6rem] lg:flex-1 lg:justify-end lg:items-center">
        <Button
          className="rounded-full w-8 h-8 bg-background mr-2 shadow-inner shadow-slate-500 dark:hover:shadow-ponokai-text hover:shadow-ponokai-background"
          variant="outline"
          size="icon"
          tooltip={{ label: "Switch Theme", side: "bottom" }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
          <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Switch Theme</span>
        </Button>
      </div>
      <main
        className={cn(
          className ||
            "flex flex-col gap-8 row-start-2 items-center sm:items-start",
          "transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        {children}
        <Footer />
      </main>
    </>
  );
}
