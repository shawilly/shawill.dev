import { LucideIcon } from "lucide-react";

export interface Submenu {
  href: string;
  label: string;
  active?: boolean;
  target?: string;
}

export interface Menu {
  href?: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  submenus?: Submenu[];
  target?: string;
}

export interface Group {
  groupLabel: string;
  menus: Menu[];
}
