import { cn } from "../../lib/utils"

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg"
}

export function Spinner({ className, size = "default", ...props }: SpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-current border-t-transparent",
        {
          "h-4 w-4": size === "sm",
          "h-5 w-5": size === "default",
          "h-6 w-6": size === "lg",
        },
        className
      )}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
} 