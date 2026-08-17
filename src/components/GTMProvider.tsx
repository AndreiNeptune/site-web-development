'use client'

import { useEffect } from 'react'

export default function GTMProvider() {
  useEffect(() => {
    const gtmId = 'GTM-WG6B94GP'

    const initGTM = () => {
      if (window.gtmLoaded) return;
      window.gtmLoaded = true;

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
    };

    const interactionEvents = ['mousemove', 'scroll', 'touchstart', 'click', 'keydown'];
    
    const onInteract = () => {
      initGTM();
      interactionEvents.forEach(evt => window.removeEventListener(evt, onInteract));
    };

    interactionEvents.forEach(evt => window.addEventListener(evt, onInteract, { once: true }));

    const timer = setTimeout(onInteract, 8000);

    return () => {
      clearTimeout(timer);
      interactionEvents.forEach(evt => window.removeEventListener(evt, onInteract));
    };
  }, [])

  return null
}

declare global {
  interface Window {
    gtmLoaded?: boolean;
    dataLayer?: any[];
  }
}
