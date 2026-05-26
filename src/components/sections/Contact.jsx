import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import ContactParticles from '../3d/ContactParticles'
import LoadingSpinner from '../ui/LoadingSpinner'

const CONTACT_LINKS = [
  {
    id:    'contact-email',
    Icon:  FiMail,
    label: 'Email',
    value: 'avinash744826@gmail.com',
    href:  'mailto:avinash744826@gmail.com',
    color: '#C9A96E',
  },
  {
    id:    'contact-phone',
    Icon:  FiPhone,
    label: 'Phone',
    value: '+91-6375292669',
    href:  'tel:+916375292669',
    color: '#7C83FD',
  },
  {
    id:    'contact-github',
    Icon:  FiGithub,
    label: 'GitHub',
    value: 'github.com/ashcodes2',
    href:  'https://github.com/ashcodes2',
    color: '#4ECDC4',
  },
  {
    id:    'contact-linkedin',
    Icon:  FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashwani-upadhyay-dev',
    href:  'https://linkedin.com/in/ashwani-upadhyay-dev',
    color: '#F2B5C0',
  },
]

export default function Contact() {
  const { isDark } = useTheme()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send (swap in EmailJS here)
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      id="contact"
      style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
    >
      {/* 3D Particle Background */}
      <div className="canvas-container" style={{ opacity: 0.6 }}>
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]}>
            <ContactParticles isDark={isDark} />
          </Canvas>
        </Suspense>
      </div>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'rgba(13,17,23,0.75)'
            : 'rgba(250,248,245,0.8)',
          zIndex: 1,
        }}
      />

      <div className="section-inner section" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Contact</div>
          <h2 className="heading-lg" style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}>
            Let's{' '}
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: '3rem', maxWidth: 480 }}>
            Open to internship opportunities, freelance projects, and interesting conversations.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-strong"
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="heading-md" style={{ marginBottom: '0.25rem' }}>Send a Message</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Email
              </label>
              <input
                id="contact-email-input"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, opportunity, or just say hi!"
                value={form.message}
                onChange={handleChange}
                className="form-input"
                style={{ resize: 'vertical', minHeight: 120 }}
              />
            </div>

            <motion.button
              id="contact-submit-btn"
              type="submit"
              className="btn-primary"
              style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
              disabled={status === 'sending' || status === 'success'}
              whileHover={{ scale: status === 'idle' ? 1.03 : 1 }}
              whileTap={{ scale: 0.97 }}
            >
              {status === 'sending' ? (
                <>Sending...</>
              ) : status === 'success' ? (
                <><FiCheckCircle size={16} /> Sent! I'll reply soon.</>
              ) : (
                <><FiSend size={15} /> Send Message</>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>Get in Touch</h3>
              <p className="body-lg" style={{ fontSize: '0.92rem' }}>
                Prefer a direct approach? Reach me through any of these channels — I typically respond within 24 hours.
              </p>
            </div>

            {CONTACT_LINKS.map(({ id, Icon, label, value, href, color }) => (
              <motion.a
                key={id}
                id={id}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="glass"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ x: 6, borderColor: color }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '10px',
                    background: `${color}18`,
                    border: `1px solid ${color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    {value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Availability */}
            <div
              className="glass"
              style={{
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderColor: 'rgba(52,211,153,0.4)',
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#34D399',
                  boxShadow: '0 0 0 3px rgba(52,211,153,0.2)',
                  animation: 'pulse-badge 2s ease-in-out infinite',
                }}
              />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Available</strong> for internships &amp; freelance — Starting Summer 2026
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
