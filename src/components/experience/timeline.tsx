"use client";

import { Experience, experiences } from "@/lib/constants/experience";
import {
  darkTheme,
  lightTheme,
} from "@/lib/constants/experience/timeline-theme";
import { useTheme } from "next-themes";
import { Chrono, TimelineItem } from "react-chrono";

export function ExperienceTimeline(): JSX.Element {
  const { theme } = useTheme();

  return (
    <Chrono
      mode="VERTICAL_ALTERNATING"
      slideItemDuration={5000}
      theme={theme === "dark" ? darkTheme : lightTheme}
      slideShow
      items={experiences.map(
        ({ icon: _icon, ...rest }: Experience): TimelineItem => ({ ...rest }),
      )}
    >
      <div className="chrono-icons">
        {experiences.map(
          ({ icon: Icon }: Experience, iconIndex: number): JSX.Element => (
            <Icon key={`experience-icon-${iconIndex + 1}`} />
          ),
        )}
      </div>
    </Chrono>
  );
}
