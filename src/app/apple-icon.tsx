import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a', // slate-900 background for apple icon contrast
        }}
      >
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="swirlGradApple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40" stroke="url(#swirlGradApple)" strokeWidth="10" strokeLinecap="round" strokeDasharray="180 60" />
          <path d="M50 20 C60 20, 70 30, 70 50 C70 70, 50 80, 40 70 C30 60, 30 40, 50 30" stroke="url(#swirlGradApple)" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
