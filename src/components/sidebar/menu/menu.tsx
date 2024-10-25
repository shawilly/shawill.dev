"use client";

import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CollapseMenuButton } from "@/components/sidebar/menu/collapse-menu-button";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getMenuList } from "@/lib/menu-list";
import { cn } from "@/lib/utils";
import type { Group, Menu } from "@/types";
import { DarkModeToggle } from "@/components/mode-toggle";

interface MenuProps {
  isOpen?: boolean;
}

export function Menu({ isOpen }: MenuProps): JSX.Element {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  const mapMenuElement = (
    { href, label, icon: Icon, active, submenus, target }: Menu,
    menuIndex: number,
  ): JSX.Element => {
    return (
      <div className="w-full" key={menuIndex}>
        {!submenus?.length ?
          <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Button
                  variant={active ? "secondary" : "ghost"}
                  className="w-full justify-start h-10 mb-1"
                  asChild
                >
                  {target === "_blank" ?
                    <a href={href} target={target} rel="noopener noreferrer">
                      <span className={cn(isOpen === false ? "" : "mr-4")}>
                        <Icon size={18} />
                      </span>
                      <p
                        className={cn(
                          "max-w-[200px] truncate",
                          isOpen === false ?
                            "-translate-x-96 opacity-0"
                          : "translate-x-0 opacity-100",
                        )}
                      >
                        {label}
                      </p>
                    </a>
                  : <Link href={href}>
                      <span className={cn(isOpen === false ? "" : "mr-4")}>
                        <Icon size={18} />
                      </span>
                      <p
                        className={cn(
                          "max-w-[200px] truncate",
                          isOpen === false ?
                            "-translate-x-96 opacity-0"
                          : "translate-x-0 opacity-100",
                        )}
                      >
                        {label}
                      </p>
                    </Link>
                  }
                </Button>
              </TooltipTrigger>
              {isOpen === false && (
                <TooltipContent side="right">{label}</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        : <CollapseMenuButton
            icon={Icon}
            label={label}
            active={active}
            submenus={submenus}
            isOpen={isOpen}
          />
        }
      </div>
    );
  };

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] space-y-1 px-2">
          {menuList.map(({ groupLabel, menus }: Group, groupIndex) => {
            return (
              <li
                className={cn("w-full", groupLabel && "pt-5")}
                key={groupIndex}
              >
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
                {menus.map(mapMenuElement)}
              </li>
            );
          })}
        </ul>
      </nav>
    </ScrollArea>
  );
}
