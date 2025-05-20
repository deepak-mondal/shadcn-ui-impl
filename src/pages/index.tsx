import { Button } from "../components/ui/button"
import { ThemeToggle } from "../components/theme-toggle"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-fluid-4">
      <div className="container mx-auto space-y-fluid-4">
        <div className="flex items-center justify-between">
          <h1 className="text-fluid-4xl font-bold">shadcn-ui Component Library</h1>
          <ThemeToggle />
        </div>
        
        <div className="space-y-fluid-2">
          <h2 className="text-fluid-2xl font-semibold">Button Variants</h2>
          <div className="flex flex-wrap gap-fluid-2">
            <Button>Default Button</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div className="space-y-fluid-2">
          <h2 className="text-fluid-2xl font-semibold">Disabled Buttons</h2>
          <div className="flex flex-wrap gap-fluid-2">
            <Button disabled>Default Disabled</Button>
            <Button variant="destructive" disabled>Destructive Disabled</Button>
            <Button variant="outline" disabled>Outline Disabled</Button>
            <Button variant="secondary" disabled>Secondary Disabled</Button>
            <Button variant="ghost" disabled>Ghost Disabled</Button>
            <Button variant="link" disabled>Link Disabled</Button>
          </div>
          <p className="text-fluid-sm text-muted-foreground">
            Disabled buttons have reduced opacity and cannot be clicked. They maintain their variant styling while clearly indicating their disabled state.
          </p>
        </div>

        <div className="space-y-fluid-2">
          <h2 className="text-fluid-2xl font-semibold">Card Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-4">
            {/* Default Card */}
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Static card with basic elevation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-fluid-sm">This is a default card with minimal elevation and no interaction.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">View Details</Button>
              </CardFooter>
            </Card>

            {/* Clickable Card */}
            <Card variant="clickable" onClick={() => alert('Card clicked!')}>
              <CardHeader>
                <CardTitle>Clickable Card</CardTitle>
                <CardDescription>Interactive card with hover effects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-fluid-sm">This card has elevation and hover effects. Try clicking it!</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>

            {/* Disabled Card */}
            <Card variant="disabled">
              <CardHeader>
                <CardTitle>Disabled Card</CardTitle>
                <CardDescription>Non-interactive card</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-fluid-sm">This card is disabled and cannot be interacted with.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" disabled>View Details</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="space-y-fluid-2">
          <h2 className="text-fluid-2xl font-semibold">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-fluid-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[clamp(1rem,0.9rem+0.5vw,1.25rem)] w-[clamp(1rem,0.9rem+0.5vw,1.25rem)]"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="space-y-fluid-2">
          <h2 className="text-fluid-2xl font-semibold">Fluid Typography</h2>
          <div className="space-y-fluid-2">
            <p className="text-fluid-xs">Extra Small Text</p>
            <p className="text-fluid-sm">Small Text</p>
            <p className="text-fluid-base">Base Text</p>
            <p className="text-fluid-lg">Large Text</p>
            <p className="text-fluid-xl">Extra Large Text</p>
            <p className="text-fluid-2xl">2XL Text</p>
            <p className="text-fluid-3xl">3XL Text</p>
            <p className="text-fluid-4xl">4XL Text</p>
          </div>
        </div>

        <div className="space-y-fluid-2">
          <h2 className="text-fluid-2xl font-semibold">Fluid Spacing</h2>
          <div className="space-y-fluid-2">
            <div className="h-fluid-1 bg-primary"></div>
            <div className="h-fluid-2 bg-primary"></div>
            <div className="h-fluid-3 bg-primary"></div>
            <div className="h-fluid-4 bg-primary"></div>
            <div className="h-fluid-5 bg-primary"></div>
            <div className="h-fluid-6 bg-primary"></div>
            <div className="h-fluid-7 bg-primary"></div>
            <div className="h-fluid-8 bg-primary"></div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-fluid-4 text-card-foreground shadow-sm">
          <h2 className="text-fluid-2xl font-semibold">Card Example</h2>
          <p className="mt-fluid-2 text-fluid-base text-muted-foreground">
            This is a card component that demonstrates dark mode styling. The background, text, and border colors will automatically adjust based on the current theme.
          </p>
        </div>
      </div>
    </div>
  )
} 