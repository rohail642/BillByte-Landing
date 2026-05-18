import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const PLANS = [
  {
    name: 'Starter',
    price: '₹799', period: '/mo',
    desc: 'For small cafes, QSRs, and cloud kitchens',
    features: [
      'Billing & KOT',
      'Table management (up to 15 tables)',
      'Dine-in, takeaway & delivery orders',
      'Online orders (Zomato & Swiggy)',
      'Basic reports',
      '2 staff accounts',
    ],
    cta: 'Get in touch',
    highlight: false,
    href: 'https://wa.me/917892718642',
  },
  {
    name: 'Pro',
    price: '₹1,499', period: '/mo',
    desc: 'For full-service restaurants',
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'Unlimited tables & sections',
      'Inventory management & stock alerts',
      'CRM & customer loyalty points',
      'Staff roles (owner, cashier, waiter, kitchen)',
      'Kitchen Display System',
      'Advanced reports & CSV exports',
      'Windows desktop app',
      'PWA — works on any mobile device',
      'Up to 10 staff accounts',
    ],
    cta: 'Get in touch',
    highlight: true,
    href: 'https://wa.me/917892718642',
  },
  {
    name: 'Chain',
    price: 'Custom', period: '',
    desc: 'For restaurant groups and franchises',
    features: [
      'Everything in Pro',
      'Multi-outlet admin dashboard',
      'Central menu management',
      'Cross-outlet reports',
      'Unlimited staff accounts',
      'Priority support',
      'Dedicated onboarding',
    ],
    cta: 'Contact us',
    highlight: false,
    href: 'mailto:rohail230@gmail.com?subject=BillByte Chain Plan Enquiry',
  },
]

export default function Pricing() {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <section id="pricing" style={{ padding: '96px 32px', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <motion.div ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            Pricing
          </p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-2px', color: 'var(--text)', marginBottom: 12 }}>
            Simple, transparent pricing.
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text3)' }}>
            Get in touch and we'll set you up with a free trial. No commitment required.
          </p>
        </motion.div>

        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, alignItems: 'start' }}>
          {PLANS.map((plan, i) => {
            const { ref, inView } = useInView({ triggerOnce: true })
            return (
              <motion.div key={plan.name} ref={ref}
                initial={{ y: 24, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                style={{
                  background: plan.highlight ? 'var(--text)' : 'white',
                  border: plan.highlight ? '2px solid var(--text)' : '1.5px solid var(--border)',
                  borderRadius: 20, padding: '32px 28px',
                  position: 'relative',
                  boxShadow: plan.highlight ? '0 12px 48px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                {plan.badge && (
                  <div style={{
                    position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--green)', color: 'white', fontSize: 10, fontWeight: 700,
                    padding: '3px 14px', borderRadius: 100, fontFamily: 'Outfit',
                    letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontFamily: 'Outfit', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10, color: plan.highlight ? 'rgba(255,255,255,0.45)' : 'var(--muted)' }}>
                    {plan.name}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
                    <span style={{ fontFamily: 'Outfit', fontSize: 40, fontWeight: 900, letterSpacing: '-2px', color: plan.highlight ? 'white' : 'var(--text)' }}>
                      {plan.price}
                    </span>
                    {plan.period && <span style={{ fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,0.4)' : 'var(--muted)' }}>{plan.period}</span>}
                  </div>
                  <p style={{ fontSize: 13, color: plan.highlight ? 'rgba(255,255,255,0.55)' : 'var(--text3)' }}>{plan.desc}</p>
                </div>

                <div style={{ borderTop: `1px solid ${plan.highlight ? 'rgba(255,255,255,0.1)' : 'var(--border)'}`, paddingTop: 20, marginBottom: 24 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 11 }}>
                      <div style={{
                        width: 17, height: 17, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                        background: plan.highlight ? 'rgba(22,163,74,0.25)' : 'var(--green-dim)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span style={{ fontSize: 13, color: plan.highlight ? 'rgba(255,255,255,0.75)' : 'var(--text3)', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a href={plan.href} target={plan.href.startsWith('mailto') ? '_self' : '_blank'} rel="noreferrer"
                  style={{
                    display: 'block', textAlign: 'center', padding: '13px',
                    borderRadius: 10, fontSize: 14, fontFamily: 'Outfit', fontWeight: 700,
                    textDecoration: 'none', transition: 'all 0.15s',
                    ...(plan.highlight
                      ? { background: 'var(--green)', color: 'white', boxShadow: '0 4px 16px rgba(22,163,74,0.4)' }
                      : { border: '1.5px solid var(--border2)', color: 'var(--text2)', background: 'transparent' }
                    ),
                  }}
                  onMouseEnter={e => {
                    if (plan.highlight) { e.currentTarget.style.background = 'var(--green2)'; e.currentTarget.style.transform = 'translateY(-1px)' }
                    else { e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.color = 'var(--text)' }
                  }}
                  onMouseLeave={e => {
                    if (plan.highlight) { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = 'translateY(0)' }
                    else { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text2)' }
                  }}>
                  {plan.cta}
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
