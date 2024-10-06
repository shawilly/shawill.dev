import {
  Bookmark,
  BriefcaseBusiness,
  Contact,
  DownloadCloud,
  FolderGit,
  Link,
  LucideIcon,
  MessageCircle,
  Settings,
  SquarePen,
  Tag,
  University,
  Users,
} from "lucide-react";

interface Submenu {
  href: string;
  label: string;
  active?: boolean;
}

interface Menu {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
}

interface Group {
  groupLabel: string;
  menus: Menu[];
}

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
              href: "/ponokai",
              label: "Ponokai",
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
