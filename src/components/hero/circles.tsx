import { Circle } from "@/components/ui/circle";

export function Circles({
  className,
  radius,
}: {
  className?: string;
  radius: number;
}): JSX.Element {
  return (
    <div className={className}>
      <Circle
        className="from-ponokai-green border-ponokai-green"
        style={{ top: `${radius * 1}rem`, left: "0rem" }}
      />
      <Circle
        className="from-ponokai-blue border-ponokai-blue"
        style={{ top: `${radius * 0.5}rem`, left: `${radius * 0.866}rem` }}
      />
      <Circle
        className="from-ponokai-red border-ponokai-red"
        style={{ top: `${radius * -0.5}rem`, left: `${radius * 0.866}rem` }}
      />
      <Circle
        className="from-ponokai-yellow border-ponokai-yellow"
        style={{ top: `${radius * -1}rem`, left: "0rem" }}
      />
      <Circle
        className="from-ponokai-purple border-ponokai-purple"
        style={{ top: `${radius * -0.5}rem`, left: `${radius * -0.866}rem` }}
      />
      <Circle
        className="from-ponokai-orange border-ponokai-orange"
        style={{ top: `${radius * 0.5}rem`, left: `${radius * -0.866}rem` }}
      />
    </div>
  );
}
