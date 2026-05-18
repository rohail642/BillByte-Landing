import { useEffect, useRef } from 'react'

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: '1.2', strokeLinecap: 'round', strokeLinejoin: 'round' }

const ForkIcon = ({ size = 48, opacity = 0.12, rotation = 0, color = '#16a34a' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rotation}deg)`, opacity, color }}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" {...stroke}/>
    <path d="M7 2v20" {...stroke}/>
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" {...stroke}/>
  </svg>
)

const PlateIcon = ({ size = 48, opacity = 0.1, rotation = 0, color = '#16a34a' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rotation}deg)`, opacity, color }}>
    <circle cx="12" cy="12" r="10" {...stroke}/>
    <circle cx="12" cy="12" r="6" {...stroke}/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" {...stroke}/>
  </svg>
)

const ChefHatIcon = ({ size = 48, opacity = 0.1, rotation = 0, color = '#16a34a' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rotation}deg)`, opacity, color }}>
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" {...stroke}/>
    <line x1="6" y1="17" x2="18" y2="17" {...stroke}/>
  </svg>
)

const SpoonIcon = ({ size = 48, opacity = 0.1, rotation = 0, color = '#16a34a' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rotation}deg)`, opacity, color }}>
    <path d="M12 2a5 5 0 0 1 0 10c-1.66 0-3-.9-3-2V4a3 3 0 0 1 3-2z" {...stroke}/>
    <line x1="12" y1="12" x2="12" y2="22" {...stroke}/>
  </svg>
)

const ReceiptIcon = ({ size = 60, opacity = 0.13, rotation = 0, color = '#16a34a' }) => (
  <svg width={size * 0.7} height={size} viewBox="0 0 42 60" style={{ transform: `rotate(${rotation}deg)`, opacity, color }}>
    <rect x="1" y="1" width="40" height="54" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 10h18M8 17h26M8 23h22M8 29h26M8 35h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
    <path d="M8 44h10M26 44h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 55 L21 51 L28 55" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </svg>
)

const BowlIcon = ({ size = 48, opacity = 0.1, rotation = 0, color = '#16a34a' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rotation}deg)`, opacity, color }}>
    <path d="M12 22a8 8 0 0 0 8-8H4a8 8 0 0 0 8 8z" {...stroke}/>
    <path d="M4 14a8 8 0 0 1 16 0" {...stroke}/>
    <line x1="12" y1="2" x2="12" y2="6" {...stroke}/>
    <path d="M8 4c0 0 1 1 4 1s4-1 4-1" {...stroke}/>
  </svg>
)

const ITEMS = [
  { Component: ForkIcon,    x: 6,  y: 10, size: 80,  depth: 0.025, rotate: -15, color: '#16a34a', opacity: 0.32 },
  { Component: ReceiptIcon, x: 84, y: 6,  size: 100, depth: 0.045, rotate: 18,  color: '#16a34a', opacity: 0.28 },
  { Component: PlateIcon,   x: 3,  y: 55, size: 88,  depth: 0.02,  rotate: 10,  color: '#d97706', opacity: 0.25 },
  { Component: ChefHatIcon, x: 87, y: 52, size: 76,  depth: 0.035, rotate: -8,  color: '#16a34a', opacity: 0.28 },
  { Component: SpoonIcon,   x: 16, y: 28, size: 68,  depth: 0.015, rotate: 8,   color: '#16a34a', opacity: 0.22 },
  { Component: BowlIcon,    x: 78, y: 30, size: 72,  depth: 0.04,  rotate: -12, color: '#d97706', opacity: 0.25 },
  { Component: ForkIcon,    x: 46, y: 3,  size: 60,  depth: 0.03,  rotate: 5,   color: '#16a34a', opacity: 0.2  },
  { Component: ReceiptIcon, x: 8,  y: 78, size: 80,  depth: 0.04,  rotate: -18, color: '#16a34a', opacity: 0.28 },
  { Component: ReceiptIcon, x: 68, y: 72, size: 68,  depth: 0.025, rotate: 12,  color: '#16a34a', opacity: 0.24 },
  { Component: PlateIcon,   x: 53, y: 80, size: 64,  depth: 0.05,  rotate: -5,  color: '#d97706', opacity: 0.22 },
  { Component: ChefHatIcon, x: 91, y: 80, size: 68,  depth: 0.02,  rotate: 20,  color: '#16a34a', opacity: 0.26 },
  { Component: SpoonIcon,   x: 1,  y: 36, size: 56,  depth: 0.055, rotate: -20, color: '#d97706', opacity: 0.28 },
]

export default function ParallaxBg() {
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('[data-parallax]')
    if (!items) return

    const onMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mouseRef.current = { x: e.clientX - cx, y: e.clientY - cy }
    }

    const animate = () => {
      // Smooth lerp
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.06
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.06

      items.forEach(el => {
        const depth = parseFloat(el.dataset.depth)
        const tx = currentRef.current.x * depth
        const ty = currentRef.current.y * depth
        el.style.transform = `translate(${tx}px, ${ty}px)`
      })
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {ITEMS.map((item, i) => {
        const { Component, x, y, size, depth, rotate, color, opacity } = item
        return (
          <div key={i} data-parallax data-depth={depth}
            style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, willChange: 'transform' }}>
            <Component size={size} rotation={rotate} color={color} opacity={opacity} />
          </div>
        )
      })}
    </div>
  )
}
