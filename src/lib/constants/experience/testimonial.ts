export interface Testimonial {
  name: string;
  designation: string;
  company: string;
  image: string;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Shawn McKay",
    designation: "Staff Software Engineer",
    company: "BioRender",
    image: "shawn-mckay.jpeg",
    message:
      "I was consistently impressed with how quickly he can learn and apply himself to new problems. Shane has a clear growth mindset - treating every problem as an opportunity - every week asking me what to study next to level up further...",
  },
  {
    name: "Roman Blyshchyk",
    designation: "Senior Software Engineer",
    company: "BioRender",
    image: "roman-blyshchyk.jpeg",
    message:
      "His energy is infectious and motivating. Shane is super fast learner and an incredible performer. I wouldn't think twice at the opportunity to work with Shane again!",
  },
  {
    name: "Francesca Ho",
    designation: "Software Developer",
    company: "BioRender",
    image: "francesca-ho.jpeg",
    message:
      "He constantly tries to learn more and is not afraid to ask questions. For every decision we made as a team, Shane would be an advocate for our users showing empathy and a deep understanding of the user's experience.",
  },
] as const;
