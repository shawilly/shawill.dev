"use client";
import { TypeAnimation } from "react-type-animation";

export const IntroTyped = (): JSX.Element => {
  return (
    <TypeAnimation
      sequence={[
        "Chantal Williams is an animator specializing in 2D animation with over 5 years of experience, focusing on various styles and team training.",
      ]}
      wrapper="span"
      cursor={true}
    />
  );
};
