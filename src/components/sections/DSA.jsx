import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiTarget, FiTrendingUp, FiZap } from 'react-icons/fi'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const observed = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true
          const start = Date.now()
          const step = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const PATTERNS = [
  { label: 'Sliding Window',   color: '#C9A96E', desc: '15+ problems'  },
  { label: 'Two Pointers',     color: '#F2B5C0', desc: '12+ problems'  },
  { label: 'Binary Search',    color: '#7C83FD', desc: '10+ problems'  },
  { label: 'Dynamic Programming', color: '#4ECDC4', desc: '20+ problems' },
  { label: 'Recursion',        color: '#F59E0B', desc: '8+ problems'   },
  { label: 'Hash Maps',        color: '#34D399', desc: '14+ problems'  },
  { label: 'Linked Lists',     color: '#F87171', desc: '10+ problems'  },
  { label: 'Trees & Graphs',   color: '#A78BFA', desc: '12+ problems'  },
]

const STATS = [
  { Icon: FiCode,      label: 'Problems Solved', value: 100, suffix: '+', color: '#C9A96E' },
  { Icon: FiTarget,    label: 'LeetCode Streak',  value: 30,  suffix: '+', color: '#F2B5C0' },
  { Icon: FiTrendingUp,label: 'Contests Joined',  value: 8,   suffix: '',  color: '#7C83FD' },
  { Icon: FiZap,       label: 'Patterns Mastered',value: 12,  suffix: '+', color: '#4ECDC4' },
]

export default function DSA() {
  return (
    <section id="dsa" className="section" style={{ background: 'var(--bg-secondary)' }}>
      {/* Glow accents */}
      <div className="glow-dot" style={{ background: 'rgba(124,131,253,0.2)', bottom: '5%', left: '-5%' }} />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Problem Solving</div>
          <h2 className="heading-lg" style={{ marginBottom: '0.75rem', marginTop: '0.5rem' }}>
            DSA &amp;{' '}
            <span className="text-gradient">Algorithms</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: '3rem', maxWidth: 520 }}>
            Consistent daily practice on LeetCode with focus on core patterns that matter most in technical interviews.
          </p>
        </motion.div>

        {/* Stat Cards Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {STATS.map(({ Icon, label, value, suffix, color }) => (
            <div key={label} className="glass stat-card">
              <Icon size={24} style={{ color, marginBottom: '0.75rem' }} />
              <div className="stat-number">
                <AnimatedCounter target={value} suffix={suffix} />
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pattern Mastery */}
        <motion.div
          className="glass"
          style={{ padding: '2rem 2.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>
            Core Patterns
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.75rem' }}>
            Mastered algorithmic patterns across LeetCode Easy → Medium → Hard progression
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {PATTERNS.map(({ label, color, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                whileHover={{
                  scale: 1.03,
                  borderColor: color,
                  boxShadow: `0 4px 20px ${color}30`,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: color,
                    boxShadow: `0 0 12px ${color}80`,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
