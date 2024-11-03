import { BioRender } from "@/components/icons/biorender";
import { Freelance } from "@/components/icons/freelance";
import { FullStackEnergy } from "@/components/icons/full-stack-energy";
import { ResourceKraft } from "@/components/icons/resourcekraft";
import { TimelineItem } from "react-chrono";

export interface Experience extends TimelineItem {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string;
  icon: (size: "sm" | "md" | "lg") => JSX.Element;
}

export const experiences: Experience[] = [
  {
    title: "April 2024 - Present",
    cardTitle: "Software Engineer",
    cardSubtitle: "ResourceKraft",
    cardDetailedText:
      "Collaborated with global businesses to deploy solutions for their hardware and software needs related to the world of energy and power. Integrated modern cross platform solutions with EV charging protocols, optimizing smart charging algorithms, and make informed hardware decisions, reducing energy wastage and promoting the adoption of utility-scale renewables",
    icon: ResourceKraft,
  },
  {
    title: "April 2024 - Present",
    cardTitle: "Software Engineer",
    cardSubtitle: "Full Stack Energy",
    cardDetailedText:
      "Full Stack Energy was established as a solutions services division of ResourceKraft due to the increasing demand for bespoke energy solutions, particularly from the US market.",
    icon: FullStackEnergy,
  },
  {
    title: "Jan 2021 - Present",
    cardTitle: "Software Engineer",
    cardSubtitle: "Freelance",
    cardDetailedText:
      "Building things for people to use, and help them do it. Contributor to open source projects",
    icon: Freelance,
  },
  {
    title: "January 2021 - June 2024",
    cardTitle: "Full Stack Developer | Support Operations",
    cardSubtitle: "BioRender",
    cardDetailedText:
      "Drove growth by releasing key features, managing 40+ tools, collaborating cross-functionally, and streamlining $1M+ in annual quote requests.",
    icon: BioRender,
  },
] as const;
