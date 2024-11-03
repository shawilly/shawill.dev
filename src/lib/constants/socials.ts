interface Social {
  href: string;
  label: string;
  target: string;
}

export const socials: Social[] = [
  {
    href: "https://www.linkedin.com/in/shanebarrywilliams/",
    label: "LinkedIn",
    target: "_blank",
  },
  {
    href: "https://github.com/shawilly",
    label: "Github",
    target: "_blank",
  },
  {
    href: "https://leetcode.com/u/shawilly/",
    label: "LeetCode",
    target: "_blank",
  },
  {
    href: "https://www.instagram.com/fatmanlifting/",
    label: "Instagram",
    target: "_blank",
  },
] as const;
