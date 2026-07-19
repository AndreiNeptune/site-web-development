'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY && !posthog.__loaded) {
      // Delay initialization by 3 seconds so it doesn't block the initial render on mobile
      const timer = setTimeout(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
          ui_host: 'https://eu.posthog.com',
          person_profiles: 'identified_only',
          capture_pageview: false, // Handled manually by PostHogPageView in layout.tsx
        })
      }, 3000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
