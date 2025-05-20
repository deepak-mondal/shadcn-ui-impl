import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isLocalhost = window.location.hostname === "localhost" || 
                      window.location.hostname === "127.0.0.1"

  if (!isLocalhost) {
    return <Navigate to="/404" replace />
  }

  return <>{children}</>
} 