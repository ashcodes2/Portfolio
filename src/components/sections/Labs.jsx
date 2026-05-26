import { motion } from 'framer-motion'
import { FiZap, FiClock, FiGithub } from 'react-icons/fi'

const WIP_PROJECTS = [
  {
    id: 'ai-prompt-enhancer',
    title: 'AI Prompt Enhancer Tool',
    tagline: 'Converts rough prompts → professional structured prompts',
    description:
      'An AI-powered web app that transforms vague, rough ideas into precise, professional prompts. Uses LLM APIs to analyze intent, inject context, and structure prompts for optimal AI output quality.',
    tech: ['React', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'Express'],
    progress: 35,
    status: 'In Progress',
    eta: 'Q3 2026',
    emoji: '🤖',
  },
]

export default function Labs() {
  return (
    <section id="labs" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Currently Building</div>
          <h2 className="heading-lg" style={{ marginBottom: '0.75rem', marginTop: '0.5rem' }}>
            Labs &amp;{' '}
            <span className="text-gradient">Experiments 🧪</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: '3rem', maxWidth: 520 }}>
            Projects I'm actively building right now — a window into my learning process.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {WIP_PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              id={project.id}
              className="wip-card"
              style={{ padding: '2rem' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{project.emoji}</div>
                  <h3 className="heading-md" style={{ marginBottom: '0.25rem' }}>{project.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600 }}>{project.tagline}</p>
                </div>
                <span className="badge badge-wip" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
                  <FiZap size={10} />
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="body-lg" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                {project.description}
              </p>

              {/* Progress Bar */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    Build Progress
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 700 }}>
                    {project.progress}%
                  </span>
                </div>
                <div
                  style={{
                    height: 6,
                    borderRadius: 3,
                    background: 'var(--bg-secondary)',
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                  }}
                >
                  <motion.div
                    style={{
                      height: '100%',
                      borderRadius: 3,
                      background: 'linear-gradient(90deg, var(--accent), var(--accent-pink))',
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {project.tech.map(t => (
                  <span
                    key={t}
                    style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ETA Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <FiClock size={12} />
                  ETA: {project.eta}
                </span>
                <a
                  id={`${project.id}-github`}
                  href="https://github.com/ashcodes2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                >
                  <FiGithub size={16} />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Add more WIP placeholder */}
          <motion.div
            className="wip-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 280,
              opacity: 0.5,
              cursor: 'default',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✨</div>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', fontSize: '0.9rem' }}>
              More experiments brewing...
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
