'use client'

import { useEffect, useRef } from 'react'

/**
 * Google AdSense Component
 *
 * Setup:
 * 1. Create a Google AdSense account (https://adsense.google.com)
 * 2. Get your Publisher ID (ca-pub-XXXXXXXXXX)
 * 3. Create ad units and get data-ad-slot values
 * 4. Set NEXT_PUBLIC_ADSENSE_ID in .env.local
 */
export default function GoogleAd({
  adSlot,
  adFormat = 'auto',
  position = 'inline',
  className = ''
}) {
  const adRef = useRef(null)
  const isLoaded = useRef(false)

  useEffect(() => {
    if (isLoaded.current) return
    if (typeof window === 'undefined') return

    try {
      const adsbygoogle = window.adsbygoogle || []
      adsbygoogle.push({})
      isLoaded.current = true
    } catch (err) {
      // AdSense not loaded yet - normal in development
    }
  }, [])

  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_ID

  // Don't render ad components if no publisher ID is configured
  if (!publisherId) {
    if (process.env.NODE_ENV === 'development') {
      return (
        <div className={`ad-container flex justify-center items-center ${className}`}>
          <div className="border-2 border-dashed border-eco-200 rounded-xl flex items-center justify-center bg-eco-50/30 text-eco-400 text-xs p-4 w-full max-w-[728px]">
            <span className="font-medium">Ad Space &mdash; {position}</span>
          </div>
        </div>
      )
    }
    return null
  }

  const positionStyles = {
    'banner-top': 'w-full max-w-[728px] h-[90px] mx-auto my-2',
    'banner-bottom': 'w-full max-w-[728px] h-[90px] mx-auto my-4',
    'sidebar': 'w-[300px] h-[600px]',
    'in-article': 'w-full max-w-[660px] mx-auto my-6',
    'in-feed': 'w-full my-4',
    'inline': 'w-full my-4',
  }

  return (
    <div className={`ad-container flex justify-center items-center ${positionStyles[position] || ''} ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  )
}

export function AdBanner({ position = 'top', className = '' }) {
  return (
    <div className={`w-full py-1 ${className}`}>
      <GoogleAd
        adSlot="HEADER_AD_SLOT"
        position={`banner-${position}`}
        adFormat="horizontal"
      />
    </div>
  )
}

export function AdInFeed({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <GoogleAd
        adSlot="INFEED_AD_SLOT"
        position="in-feed"
        adFormat="fluid"
      />
    </div>
  )
}

export function AdInArticle({ className = '' }) {
  return (
    <div className={`my-6 ${className}`}>
      <div className="text-center text-[10px] text-eco-400 mb-1 uppercase tracking-wider font-medium">
        Publicidade
      </div>
      <GoogleAd
        adSlot="ARTICLE_AD_SLOT"
        position="in-article"
        adFormat="fluid"
      />
    </div>
  )
}
