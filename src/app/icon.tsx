import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="swirlGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40" stroke="url(#swirlGradIcon)" strokeWidth="12" strokeLinecap="round" strokeDasharray="180 60" />
          <path d="M50 20 C60 20, 70 30, 70 50 C70 70, 50 80, 40 70 C30 60, 30 40, 50 30" stroke="url(#swirlGradIcon)" strokeWidth="10" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
