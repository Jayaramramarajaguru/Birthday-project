import { Navigate, useLocation } from "react-router-dom"

const BIRTHDAY = new Date("2026-06-27T00:00:00")

export default function LockGate({ children }) {
  const location = useLocation()
  const isUnlocked = new Date() >= BIRTHDAY

  if (!isUnlocked) {
    return (
      <Navigate
        to="/countdown"
        replace
        state={{ blockedFrom: location.pathname }}
      />
    )
  }

  return children
}