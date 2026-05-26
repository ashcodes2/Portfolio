import { motion } from 'framer-motion'
import { FiCalendar, FiExternalLink } from 'react-icons/fi'

const EXPERIENCES = [
  {
    id: 'vijay-medical',
    role: 'Freelance Frontend Developer',
    company: 'Vijay Medical Store',
    period: '2024 — Present',
    type: 'Freelance',
    highlights: [
      'Architected a high-performance e-commerce frontend using React & Tailwind CSS, achieving sub-2s load times.',
      'Built a zero-database WhatsApp API checkout pipeline, eliminating backend overhead and reducing cart abandonment.',
      'Implemented responsive design and PWA features, improving mobile UX for 200+ daily users.',
      'Deployed and maintained the application on both Netlify and Vercel with CI/CD pipelines.',
    ],
    tech: ['React', 'Tailwind CSS', 'WhatsApp API', 'Netlify', 'Vercel', 'PWA'],
    color: '#C9A96E',
    link: 'https://vijay-medical.vercel.app/',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Experience</div>
          <h2 className="heading-lg" style={{ marginBottom: '0.75rem', marginTop: '0.5rem' }}>
            Work{' '}
            <span className="text-gradient">History</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: '3rem', maxWidth: 480 }}>
            Real-world experience shipping production-grade applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '3rem' }}>
          <div className="timeline-line" />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{
                position: 'relative',
                marginBottom: '2.5rem',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
              }}
            >
              {/* Timeline dot */}
              <div
                className="timeline-dot"
                style={{
                  position: 'absolute',
                  left: '-2.85rem',
                  background: exp.color,
                  boxShadow: `0 0 0 4px ${exp.color}25, 0 0 20px ${exp.color}50`,
                }}
              />

              {/* Card */}
              <div
                className="glass"
                style={{
                  padding: '2rem',
                  width: '100%',
                  borderLeft: `3px solid ${exp.color}`,
                  borderRadius: '0 var(--radius) var(--radius) 0',
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div>
                    <h3 className="heading-md" style={{ marginBottom: '0.25rem' }}>
                      {exp.role}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: 600 }}>
                      {exp.company}
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit' }}
                      >
                        <FiExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <FiCalendar size={12} />
                      {exp.period}
                    </span>
                    <span className="badge">{exp.type}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="body-lg"
                      style={{
                        marginBottom: '0.6rem',
                        fontSize: '0.92rem',
                        listStyleType: 'none',
                        paddingLeft: '0.25rem',
                      }}
                    >
                      <span style={{ color: exp.color, marginRight: '0.5rem' }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.tech.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Open to work indicator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              position: 'relative',
              paddingLeft: '0',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '-2.85rem',
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: '#34D399',
                boxShadow: '0 0 0 4px rgba(52,211,153,0.2), 0 0 20px rgba(52,211,153,0.4)',
                marginTop: 4,
              }}
            />
            <div
              className="glass"
              style={{
                padding: '1.25rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderLeft: '3px solid #34D399',
                borderRadius: '0 var(--radius) var(--radius) 0',
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#34D399',
                  animation: 'pulse-badge 2s ease-in-out infinite',
                }}
              />
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                Currently open to internships &amp; freelance opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
