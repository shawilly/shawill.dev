import { MoonIcon, Skull, SunIcon } from "lucide-react";
import Link from "next/link";

import { Menu } from "@/components/sidebar/menu/menu";
import { SidebarToggle } from "@/components/sidebar/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { useTheme } from "next-themes";
import localFont from "next/font/local";
import { DarkModeToggle } from "../mode-toggle";

const picnic = localFont({ src: "../../fonts/PicNic-Regular.woff2" });

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const { setTheme, theme } = useTheme();

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-1 lg:translate-x-0 transition-[width] ease-in-out duration-300",
        sidebar?.isOpen === false ? "w-[90px]" : "w-72",
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0",
          )}
          variant="link"
          asChild
        >
          <Link href="/" className="flex items-center gap-2">
            <Skull className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                sidebar?.isOpen === false ?
                  "-translate-x-96 opacity-0 hidden"
                : "translate-x-0 opacity-100",
                picnic.className,
              )}
            >
              shawilly
            </h1>
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}
