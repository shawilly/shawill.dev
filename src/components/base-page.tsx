"use client";
import { Sidebar } from "@/components/sidebar/sidebar";
import { useSidebarToggle } from "@/hooks/sidebar/use-sidebar-toggle";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "zustand";
import Footer from "./footer";

export function BasePage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  return (
    <>
      <Sidebar />
      <ToastContainer />
      <main
        className={cn(
          className,
          "min-h-screen transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
