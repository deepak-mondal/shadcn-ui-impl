import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-fluid-4">
      <div className="container max-w-[600px] text-center space-y-fluid-4">
        <h1 className="text-fluid-4xl font-bold">404</h1>
        <h2 className="text-fluid-2xl font-semibold">Page Not Found</h2>
        <p className="text-fluid-base text-muted-foreground">
          The page you're looking for doesn't exist or you don't have permission to access it.
        </p>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
} 