import { Barcode, ZIGZAG_BOTTOM } from '../components/doodles'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)' }}>
      {/* The page above "tears off" onto the footer like receipt paper */}
      <div style={{ height: 16, background: 'white', clipPath: ZIGZAG_BOTTOM }} />

      <div style={{ padding: '48px 32px 32px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 44 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
                <img src="/favicon.png" alt="BillByte" style={{ width: 30, height: 30, borderRadius: 7 }} />
                <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 17, color: 'var(--text)', letterSpacing: '-0.4px' }}>
                  Bill<span style={{ color: 'var(--green)' }}>Byte</span>
                </span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.75, maxWidth: 240, marginBottom: 16 }}>
                The restaurant OS built for modern India. Simple, affordable, and powerful.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <a href="mailto:rohail230@gmail.com" style={{ fontSize: 12, color: 'var(--text3)', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'var(--green)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text3)'}>
                  rohail230@gmail.com
                </a>
                <a href="https://wa.me/917892718642" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: 'var(--text3)', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'var(--green)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text3)'}>
                  +91 78927 18642
                </a>
                <a href="https://wa.me/919986180523" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: 'var(--text3)', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'var(--green)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text3)'}>
                  +91 99861 80523
                </a>
              </div>
              <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 14 }}>Made in Bengaluru, India</p>
            </div>

            {[
              ['Product',  [['Features', '#features'], ['Pricing', '#pricing'], ['How it works', '#how-it-works']]],
              ['Company',  [['About', '#'], ['Contact', 'mailto:rohail230@gmail.com'], ['WhatsApp', 'https://wa.me/917892718642']]],
              ['Legal',    [['Privacy Policy', 'https://app.billbyte.co.in/#/privacy'], ['Terms of Service', 'https://app.billbyte.co.in/#/terms']]],
            ].map(([heading, links]) => (
              <div key={heading}>
                <p style={{ fontFamily: 'Outfit', fontSize: 11, fontWeight: 700, color: 'var(--text)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
                  {heading}
                </p>
                {links.map(([label, href]) => (
                  <a key={label} href={href}
                    target={href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                    style={{ display: 'block', fontSize: 13, color: 'var(--text3)', marginBottom: 10, textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--green)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text3)'}>
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Receipt sign-off */}
          <div style={{ color: 'var(--muted)', marginBottom: 26 }}>
            <Barcode label="BB · EST. 2026 · IN" />
            <p style={{
              fontFamily: "'VT323', monospace", fontSize: 16, color: 'var(--muted)',
              letterSpacing: 2, textAlign: 'center', marginTop: 8,
            }}>
              *** THANK YOU · VISIT AGAIN ***
            </p>
          </div>

          <div style={{
            borderTop: '1.5px dashed var(--border2)', paddingTop: 22,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8,
          }}>
            <p style={{ fontSize: 12, color: 'var(--muted)' }}>© 2026 BillByte. All rights reserved.</p>
            <p style={{ fontSize: 12, color: 'var(--muted)' }}>GST-compliant · No hardware lock-in · Works on any device</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
