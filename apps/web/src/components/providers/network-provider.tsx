"use client"

import { NetworkOffline } from "@components"
import useNetworkStatus from "@shared-hooks/use-network-status"
import type { ReactNode } from "react"

export function NetworkProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { isOnline } = useNetworkStatus()

  if (!isOnline) return <NetworkOffline />

  return children
}
