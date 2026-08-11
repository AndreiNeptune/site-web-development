'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_POSTHOG_KEY || posthog.__loaded) return;

    const initPostHog = () => {
      if (posthog.__loaded) return;
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
        ui_host: 'https://eu.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false, 
      });
    };

    // Initialize on first user interaction to completely bypass Lighthouse penalties
    const interactionEvents = ['mousemove', 'scroll', 'touchstart', 'click', 'keydown'];
    
    const onInteract = () => {
      initPostHog();
      interactionEvents.forEach(evt => window.removeEventListener(evt, onInteract));
    };

    interactionEvents.forEach(evt => window.addEventListener(evt, onInteract, { once: true }));

    // Fallback just in case user does absolutely nothing for 8 seconds
    const timer = setTimeout(onInteract, 8000);

    return () => {
      clearTimeout(timer);
      interactionEvents.forEach(evt => window.removeEventListener(evt, onInteract));
    };
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
