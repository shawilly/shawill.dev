interface Project {
  title: string;
  imgHref: string;
  description: string;
  url: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Chantoola",
    imgHref: "chantoola.png",
    description:
      "A web platform for Chantoola's portfolio showcasing unique artistic pieces.",
    url: "https://chantoola.com",
    github: "https://github.com/shawilly/chantoola",
  },
  {
    title: "First Chance Shirts",
    imgHref: "firstchanceshirts.png",
    description:
      "An e-commerce website for First Chance Shirts with custom clothing and accessories.",
    url: "https://firstchanceshirts.com",
    github: "https://github.com/shawilly/firstchanceshirts",
  },
  {
    title: "Ponokai",
    imgHref: "ponokai.png",
    description:
      "A pastel twist on the iconic Monokai theme, crafted for comfort and style. Ponokai merges Sonokai with the soft palette of modern themes like Catppuccin.",
    url: "https://ponokai.vercel.app/",
    github: "https://github.com/shawilly/ponokai",
  },
  {
    title: "Richmond Hair Studio",
    imgHref: "richmondhairstudio.png",
    description:
      "A web presence for Richmond Hair Studio, providing information on services and booking.",
    url: "https://richmondhairstudio.com",
    github: "https://github.com/shawilly/richmondhairstudio",
  },
];
