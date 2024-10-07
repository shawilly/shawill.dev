"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Dot, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import type { Submenu } from "@/types";

interface CollapseMenuButtonProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  submenus: Submenu[];
  isOpen?: boolean;
}

export function CollapseMenuButton({
  icon: Icon,
  label,
  active,
  submenus,
  isOpen,
}: CollapseMenuButtonProps) {
  const pathname = usePathname();
  const isSubmenuActive = submenus.some((submenu) =>
    submenu.active == undefined ? submenu.href === pathname : submenu.active,
  );
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);

  const mapOpenSubmenuItem = (
    { href, label: openLabel, active: openActive, target: openTarget }: Submenu,
    index: number,
  ): JSX.Element => {
    return (
      <Button
        key={index}
        variant={
          (openActive === undefined && pathname === href) || openActive ?
            "secondary"
          : "ghost"
        }
        className="w-full justify-start h-10 mb-1"
        asChild
      >
        {openTarget === "_blank" ?
          <a href={href} target={openTarget} rel="noopener noreferrer">
            <span className="mr-4 ml-2">
              <Dot size={18} />
            </span>
            <p
              className={cn(
                "max-w-[170px] truncate",
                isOpen ?
                  "translate-x-0 opacity-100"
                : "-translate-x-96 opacity-0",
              )}
            >
              {openLabel}
            </p>
          </a>
        : <Link href={href}>
            <span className="mr-4 ml-2">
              <Dot size={18} />
            </span>
            <p
              className={cn(
                "max-w-[170px] truncate",
                isOpen ?
                  "translate-x-0 opacity-100"
                : "-translate-x-96 opacity-0",
              )}
            >
              {openLabel}
            </p>
          </Link>
        }
      </Button>
    );
  };

  const mapClosedSubmenuItem = (
    {
      href,
      label: closedLabel,
      active: closedActive,
      target: closedTarget,
    }: Submenu,
    index: number,
  ): JSX.Element => (
    <DropdownMenuItem key={index} asChild>
      {closedTarget === "_blank" ?
        <a
          className={`cursor-pointer ${
            ((closedActive === undefined && pathname === href) ||
              closedActive) &&
            "bg-secondary"
          }`}
          href={href}
          target={closedTarget}
          rel="noopener noreferrer"
        >
          <p className="max-w-[180px] truncate">{closedLabel}</p>
        </a>
      : <Link
          className={`cursor-pointer ${
            ((closedActive === undefined && pathname === href) ||
              closedActive) &&
            "bg-secondary"
          }`}
          href={href}
        >
          <p className="max-w-[180px] truncate">{closedLabel}</p>
        </Link>
      }
    </DropdownMenuItem>
  );

  return isOpen ?
      <Collapsible
        open={isCollapsed}
        onOpenChange={setIsCollapsed}
        className="w-full"
      >
        <CollapsibleTrigger
          className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
          asChild
        >
          <Button
            variant={active ? "secondary" : "ghost"}
            className="w-full justify-start h-10"
          >
            <div className="w-full items-center flex justify-between">
              <div className="flex items-center">
                <span className="mr-4">
                  <Icon size={18} />
                </span>
                <p
                  className={cn(
                    "max-w-[150px] truncate",
                    isOpen ?
                      "translate-x-0 opacity-100"
                    : "-translate-x-96 opacity-0",
                  )}
                >
                  {label}
                </p>
              </div>
              <div
                className={cn(
                  "whitespace-nowrap",
                  isOpen ?
                    "translate-x-0 opacity-100"
                  : "-translate-x-96 opacity-0",
                )}
              >
                <ChevronDown
                  size={18}
                  className="transition-transform duration-200"
                />
              </div>
            </div>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {submenus.map(mapOpenSubmenuItem)}
        </CollapsibleContent>
      </Collapsible>
    : <DropdownMenu>
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={active ? "secondary" : "ghost"}
                  className="w-full justify-start h-10 mb-1"
                >
                  <div className="w-full items-center flex justify-between">
                    <div className="flex items-center">
                      <span className={cn(isOpen === false ? "" : "mr-4")}>
                        <Icon size={18} />
                      </span>
                      <p
                        className={cn(
                          "max-w-[200px] truncate",
                          isOpen === false ? "opacity-0" : "opacity-100",
                        )}
                      >
                        {label}
                      </p>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="right" align="start" alignOffset={2}>
              {label}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DropdownMenuContent side="right" sideOffset={25} align="start">
          <DropdownMenuLabel className="max-w-[190px] truncate">
            {label}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {submenus.map(mapClosedSubmenuItem)}
          <DropdownMenuArrow className="fill-border" />
        </DropdownMenuContent>
      </DropdownMenu>;
}
