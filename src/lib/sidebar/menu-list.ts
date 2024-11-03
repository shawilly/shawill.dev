import type { Group } from "@/types";
import {
  BriefcaseBusiness,
  FileDown,
  HeartHandshake,
  Home,
  Link,
  MessageCircle,
  University,
} from "lucide-react";
import { socials } from "../constants/socials";

export function getMenuList(pathname: string): Group[] {
  const groups: Group[] = [
    {
      groupLabel: "Experience",
      menus: [
        {
          href: "/experience",
          label: "Work",
          active: pathname.endsWith("/experience"),
          icon: BriefcaseBusiness,
        },
        {
          href: "/experience/community",
          label: "Community",
          active: false,
          icon: HeartHandshake,
          submenus: [
            {
              href: "/experience/community",
              label: "Work with me",
            },
            {
              href: "/experience/community/chantoola",
              label: "Chantoola",
            },
            {
              href: "/experience/community/first-chance-shirts",
              label: "First Chance Shirts",
            },
            {
              href: "/experience/community/ponokai",
              label: "Ponokai",
            },
            {
              href: "/experience/community/richmond-hair-studio",
              label: "Richmond Hair Studio",
            },
          ],
        },
        {
          href: "/experience/school",
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
        },
      ],
    },
  ];

  const homeButton = {
    href: "/",
    label: "Home",
    active: false,
    icon: Home,
  };

  return [
    {
      groupLabel: "",
      menus: [homeButton],
    },
    ...groups,
  ];
}
