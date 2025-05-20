import "./styles/globals.css"
import { ThemeProvider } from "./components/theme-provider"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages"
import Components from "./pages/components"
import NotFound from "./pages/404"
import { ProtectedRoute } from "./components/protected-route"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="shadcn-ui-theme">
      <Router>
        <div className="min-h-screen bg-background">
          <nav className="border-b">
            <div className="container mx-auto flex h-16 items-center px-4">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-fluid-lg font-semibold">
                  shadcn-ui
                </Link>
                <div className="h-6 w-px bg-border" />
                <Link to="/components" className="text-fluid-base text-muted-foreground hover:text-foreground">
                  Components
                </Link>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/components" 
              element={
                <ProtectedRoute>
                  <Components />
                </ProtectedRoute>
              } 
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
} 