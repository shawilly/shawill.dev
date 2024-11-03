"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        info: "bg-ponokai-diagnostics-infoForeground font-black text-ponokai-diagnostics-infoBackground shadow hover:bg-ponokai-diagnostics-infoBackground border-2 border hover:border-ponokai-diagnostics-infoBorder hover:text-ponokai-diagnostics-infoForeground dark:bg-ponokai-diagnostics-infoBackground dark:text-ponokai-diagnostics-infoForeground dark:border-ponokai-diagnostics-infoBorder dark:hover:bg-ponokai-diagnostics-infoForeground dark:hover:text-ponokai-diagnostics-infoBackground",
        ok: "bg-ponokai-diagnostics-okForeground font-black text-ponokai-diagnostics-okBackground shadow hover:bg-ponokai-diagnostics-okBackground border-2 border hover:border-ponokai-diagnostics-okBorder hover:text-ponokai-diagnostics-okForeground dark:bg-ponokai-diagnostics-okBackground dark:text-ponokai-diagnostics-okForeground dark:border-ponokai-diagnostics-okBorder dark:hover:bg-ponokai-diagnostics-okForeground dark:hover:text-ponokai-diagnostics-okBackground",
        success:
          "bg-ponokai-diagnostics-successForeground font-black text-ponokai-diagnostics-successBackground shadow hover:bg-ponokai-diagnostics-successBackground border-2 border hover:border-ponokai-diagnostics-successBorder hover:text-ponokai-diagnostics-successForeground dark:bg-ponokai-diagnostics-successBackground dark:text-ponokai-diagnostics-successForeground dark:border-ponokai-diagnostics-successBorder dark:hover:bg-ponokai-diagnostics-successForeground dark:hover:text-ponokai-diagnostics-successBackground",
        warning:
          "bg-ponokai-diagnostics-warningForeground font-black text-ponokai-diagnostics-warningBackground shadow hover:bg-ponokai-diagnostics-warningBackground border-2 border hover:border-ponokai-diagnostics-warningBorder hover:text-ponokai-diagnostics-warningForeground dark:bg-ponokai-diagnostics-warningBackground dark:text-ponokai-diagnostics-warningForeground dark:border-ponokai-diagnostics-warningBorder dark:hover:bg-ponokai-diagnostics-warningForeground dark:hover:text-ponokai-diagnostics-warningBackground",
        error:
          "bg-ponokai-diagnostics-errorForeground font-black text-ponokai-diagnostics-errorBackground shadow hover:bg-ponokai-diagnostics-errorBackground border-2 border hover:border-ponokai-diagnostics-errorBorder hover:text-ponokai-diagnostics-errorForeground dark:bg-ponokai-diagnostics-errorBackground dark:text-ponokai-diagnostics-errorForeground dark:border-ponokai-diagnostics-errorBorder dark:hover:bg-ponokai-diagnostics-errorForeground dark:hover:text-ponokai-diagnostics-errorBackground",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      animation: {
        "hover-grow": "hover:scale-110 transition-transform duration-100",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  animation?: "hover-grow";
  tooltip?: { label: string; side?: "left" | "right" | "top" | "bottom" };
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { animation, className, variant, size, tooltip, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return tooltip?.label ?
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Comp
                className={cn(
                  buttonVariants({ variant, size, className, animation }),
                )}
                ref={ref}
                {...props}
              />
            </TooltipTrigger>
            {tooltip?.label ?
              <TooltipContent side={tooltip?.side}>
                {tooltip.label}
              </TooltipContent>
            : null}
          </Tooltip>
        </TooltipProvider>
      : <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
