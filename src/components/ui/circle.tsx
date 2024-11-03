import { cn } from "@/lib/utils";

export interface CircleProps {
  className?: string;
  style?: Pick<React.CSSProperties, "left" | "top">;
}

export function Circle({ className, style }: CircleProps): JSX.Element {
  return (
    <div
      className={cn(
        className,
        "absolute w-72 h-72 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0 shadow-lg transition-transform duration-1000 hover:scale-105 opacity-30 border-4  bg-gradient-to-br",
      )}
      style={style}
    />
  );
}
