import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Spinner } from "./spinner";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-fluid-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline: "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default:
					"h-[clamp(2.5rem,2.25rem+1.25vw,3rem)] px-[clamp(1rem,0.75rem+1.25vw,1.5rem)] py-[clamp(0.5rem,0.375rem+0.625vw,0.75rem)]",
				sm: "h-[clamp(2rem,1.75rem+1.25vw,2.5rem)] rounded-md px-[clamp(0.75rem,0.5rem+1.25vw,1rem)] text-fluid-xs text-primary-foreground",
				lg: "h-[clamp(3rem,2.75rem+1.25vw,3.5rem)] rounded-md px-[clamp(1.25rem,1rem+1.25vw,1.75rem)] text-fluid-base text-primary-foreground",
				icon: "h-[clamp(2.5rem,2.25rem+1.25vw,3rem)] w-[clamp(2.5rem,2.25rem+1.25vw,3rem)]",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(
					buttonVariants({ variant, size, className }),
					variant === "outline" && "text-foreground",
					variant === "ghost" && "text-foreground",
					variant === "link" && "text-primary",
					variant === "secondary" && "text-foreground",
					(variant === "default" || variant === "destructive") && "text-primary-foreground"
				)}
				ref={ref}
				disabled={loading || props.disabled}
				{...props}
			>
				<span className="inline-flex items-center">
					{children}
					{loading && <Spinner size={size === "sm" ? "sm" : size === "lg" ? "lg" : "default"} className="ml-2" />}
				</span>
			</Comp>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
