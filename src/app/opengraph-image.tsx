import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Omnivo | Servicii IT și Web Development'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #020617, #0f172a)', // slate-950 to slate-900
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
          <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="swirlGradNew" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="40" stroke="url(#swirlGradNew)" strokeWidth="8" strokeLinecap="round" strokeDasharray="180 60" />
            <path d="M50 20 C60 20, 70 30, 70 50 C70 70, 50 80, 40 70 C30 60, 30 40, 50 30" stroke="url(#swirlGradNew)" strokeWidth="6" strokeLinecap="round" fill="none" />
          </svg>
          <div style={{ marginLeft: '40px', fontSize: '110px', fontWeight: 'bold', fontFamily: 'sans-serif', letterSpacing: '-0.05em' }}>
            OMNIVO
          </div>
        </div>
        <div style={{ fontSize: '42px', color: '#94a3b8', textAlign: 'center', maxWidth: '900px', lineHeight: 1.4, fontWeight: 500 }}>
          Servicii IT Profesionale &amp; Web Design Premium
        </div>
        <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', gap: '30px' }}>
           <div style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '10px 24px', borderRadius: '100px', fontSize: '28px', fontWeight: 'bold' }}>
             București &amp; Ilfov
           </div>
           <div style={{ background: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa', padding: '10px 24px', borderRadius: '100px', fontSize: '28px', fontWeight: 'bold' }}>
             Creare Site-uri Web
           </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
