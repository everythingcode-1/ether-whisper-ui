import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-3xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-3xl",
        outline: "border border-border bg-transparent hover:bg-foreground/5 rounded-3xl backdrop-blur-sm",
        secondary: "bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 rounded-3xl border border-border",
        ghost: "hover:bg-foreground/5 rounded-3xl",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "outline-card glow-hover text-foreground",
        hero: "bg-primary text-primary-foreground rounded-3xl hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] font-semibold transition-all duration-300",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
