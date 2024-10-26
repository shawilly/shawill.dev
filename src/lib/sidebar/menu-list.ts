import type { Group } from "@/types";
import {
  BriefcaseBusiness,
  FileDown,
  HeartHandshake,
  Link,
  MessageCircle,
  University,
} from "lucide-react";
import { socials } from "../constants/socials";

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Experience",
      menus: [
        {
          href: "/experience",
          label: "Work",
          active: pathname.includes("/work-experience"),
          icon: BriefcaseBusiness,
        },
        {
          href: "/experience",
          label: "Community",
          active: pathname.includes("#projects"),
          icon: HeartHandshake,
          submenus: [
            {
              href: "/experience/ponokai",
              label: "Ponokai",
            },
            {
              href: "/experience/chantoola",
              label: "Chantoola",
            },
            {
              href: "/experience/richmond-hair-studio",
              label: "Richmond Hair Studio",
            },
          ],
        },
        {
          href: "/experience#school",
          label: "School",
          active: pathname.includes("school"),
          icon: University,
        },
      ],
    },
    {
      groupLabel: "Work with me",
      menus: [
        {
          href: "/contact",
          label: "Contact",
          active: pathname.includes("/contact"),
          icon: MessageCircle,
        },
        {
          href: undefined,
          label: "Socials",
          active: false,
          icon: Link,
          submenus: socials,
        },
      ],
    },
    {
      groupLabel: "TL;DR",
      menus: [
        {
          href: "https://docs.google.com/document/d/1XebXiapH1V6ZWhDmdIXZVVqzKLLwhEVR/export?format=pdf",
          label: "Download resume",
          active: false,
          icon: FileDown,
          submenus: [],
        },
      ],
    },
  ];
}
