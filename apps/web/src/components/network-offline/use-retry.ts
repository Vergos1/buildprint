import { useState } from "react"

export function useRetry() {
  const [isChecking, setIsChecking] = useState<boolean>(false)
  const [lastCheck, setLastCheck] = useState<Date>(new Date())

  const handleRetry = async () => {
    setIsChecking(true)
    await new Promise((r) => setTimeout(r, 2000))
    setLastCheck(new Date())
    setIsChecking(false)
    window.location.reload()
  }

  return { retry: handleRetry, isChecking, lastCheck }
}
