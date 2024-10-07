import type { Group } from "@/types";
import {
  BriefcaseBusiness,
  DownloadCloud,
  FolderGit,
  Link,
  MessageCircle,
  University,
} from "lucide-react";

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Experience",
      menus: [
        {
          href: "",
          label: "Projects",
          active: pathname.includes("/projects"),
          icon: FolderGit,
          submenus: [
            {
              href: "https://ponokai.vercel.app",
              label: "Ponokai",
              target: "_blank",
            },
            {
              href: "/chantoola",
              label: "Chantoola",
            },
          ],
        },
        {
          href: "/work-experience",
          label: "Work",
          active: pathname.includes("/work-experience"),
          icon: BriefcaseBusiness,
        },
        {
          href: "/Education",
          label: "Education",
          active: pathname.includes("/education"),
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
          href: "/social",
          label: "Socials",
          active: pathname.includes("/social"),
          icon: Link,
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "https://docs.google.com/document/d/1XebXiapH1V6ZWhDmdIXZVVqzKLLwhEVR/export?format=pdf",
          label: "Download resume",
          active: false,
          icon: DownloadCloud,
          submenus: [],
        },
      ],
    },
  ];
}
