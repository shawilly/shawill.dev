"use client";

import { CollapseMenuButton } from "@/components/sidebar/menu/collapse-menu-button";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getMenuList } from "@/lib/sidebar/menu-list";
import { cn } from "@/lib/utils";
import type { Group, Menu } from "@/types";
import { Ellipsis, MoonIcon, SunIcon, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
  isOpen?: boolean;
}

export function Menu({ isOpen }: MenuProps): JSX.Element {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <nav className="mt-8 h-screen w-full">
      <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] space-y-1 px-2">
        {menuList.map(({ groupLabel, menus }: Group, groupIndex: number) => (
          <li className={cn("w-full", groupLabel && "pt-5")} key={groupIndex}>
            {groupLabel &&
              (isOpen || isOpen === undefined ?
                <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                  {groupLabel}
                </p>
              : <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger className="w-full flex justify-center items-center">
                      <Ellipsis className="h-5 w-5" />
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>)}
            {menus.map(
              (
                { href, label, icon: Icon, active, submenus, target }: Menu,
                menuIndex: number,
              ) => (
                <div className="w-full" key={menuIndex}>
                  {!submenus?.length ?
                    <Button
                      variant={active ? "secondary" : "ghost"}
                      className="w-full justify-start h-10 mb-1"
                      tooltip={!isOpen ? { label, side: "right" } : undefined}
                      asChild
                    >
                      <Link
                        href={href!}
                        target={target === "_blank" ? target : undefined}
                        rel={
                          target === "_blank" ?
                            "noopener noreferrer"
                          : undefined
                        }
                      >
                        <span className={cn(isOpen ? "mr-4" : "")}>
                          <Icon size={18} />
                        </span>
                        <p
                          className={cn(
                            "max-w-[200px] truncate",
                            isOpen ?
                              "translate-x-0 opacity-100"
                            : "-translate-x-96 opacity-0",
                          )}
                        >
                          {label}
                        </p>
                      </Link>
                    </Button>
                  : <CollapseMenuButton
                      icon={Icon}
                      label={label}
                      active={active}
                      submenus={submenus}
                      isOpen={isOpen}
                    />
                  }
                </div>
              ),
            )}
          </li>
        ))}
        <li className="w-full grow flex items-end space-x-2">
          <Button
            className="rounded-full hover:shadow-inner hover:shadow-ponokai-dimmed1 hover:dark:shadow-ponokai-dimmed5"
            variant={theme === "dark" ? "warning" : "info"}
            size="icon"
            tooltip={{
              label: theme === "dark" ? "Light Mode" : "Dark Mode",
              side: "top",
            }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
            <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
          </Button>
          <Button
            className="rounded-full"
            variant="ok"
            size="icon"
            tooltip={{ label: "Open Terminal", side: "top" }}
            onClick={() => console.log("Open Terminal")}
          >
            <Terminal className="w-5 h-5" />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
