import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { SiVercel, SiNetlify, SiGithub } from 'react-icons/si'

const PROJECTS = [
  {
    id: 'collabcode',
    title: 'CollabCode',
    tagline: 'Real-Time Collaborative 3D Code Editor',
    description:
      'A fully real-time collaborative code editor supporting multiple users editing simultaneously. Features syntax highlighting, live cursors, and shared terminal — built with Socket.io for ultra-low latency sync.',
    tech: ['React', 'Node.js', 'Socket.io', 'CodeMirror', 'Express'],
    deployment: { label: 'Vercel', Icon: SiVercel, class: 'badge-vercel' },
    liveUrl: 'https://client-sigma-murex.vercel.app',
    sourceUrl: 'https://github.com/ashcodes2/collabcode',
    gradient: 'linear-gradient(135deg, #7C83FD, #4ECDC4)',
    emoji: '⚡',
    featured: true,
  },
  {
    id: 'vijay-medicals',
    title: 'Vijay Medicals Web App',
    tagline: 'Medical E-Commerce with WhatsApp Checkout',
    description:
      'A production-deployed pharmacy e-commerce app with product catalog, search, WhatsApp-based zero-database checkout, and PWA support. Actively serving customers with 200+ daily users.',
    tech: ['React', 'Tailwind CSS', 'WhatsApp API', 'PWA', 'Vite'],
    deployment: { label: 'Vercel', Icon: SiVercel, class: 'badge-vercel' },
    liveUrl: 'https://vijay-medical.vercel.app/',
    sourceUrl: 'https://github.com/ashcodes2/vijay-medical',
    gradient: 'linear-gradient(135deg, #34D399, #06B6D4)',
    emoji: '💊',
    featured: true,
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="glass project-card"
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Gradient Top Bar */}
      <div
        style={{
          height: 4,
          background: project.gradient,
          borderRadius: '16px 16px 0 0',
        }}
      />

      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{project.emoji}</div>
            <h3 className="heading-md" style={{ marginBottom: '0.2rem' }}>{project.title}</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600 }}>{project.tagline}</p>
          </div>
          <span className={`badge ${project.deployment.class}`} style={{ flexShrink: 0 }}>
            <project.deployment.Icon size={12} />
            {project.deployment.label}
          </span>
        </div>

        {/* Description */}
        <p className="body-lg" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>
          {project.description}
        </p>

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

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            id={`${project.id}-live-btn`}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ flex: 1, justifyContent: 'center', padding: '0.6rem 1rem', fontSize: '0.85rem' }}
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>
          <a
            id={`${project.id}-source-btn`}
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ flex: 1, justifyContent: 'center', padding: '0.6rem 1rem', fontSize: '0.85rem' }}
          >
            <FiGithub size={14} />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Projects</div>
          <h2 className="heading-lg" style={{ marginBottom: '0.75rem', marginTop: '0.5rem' }}>
            Featured{' '}
            <span className="text-gradient">Work</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: '3rem', maxWidth: 520 }}>
            Production-grade applications built with real users in mind.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <a
            id="all-projects-btn"
            href="https://github.com/ashcodes2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ display: 'inline-flex' }}
          >
            <FiGithub size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
