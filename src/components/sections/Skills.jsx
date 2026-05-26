import { motion } from 'framer-motion'
import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript,
  SiTailwindcss, SiPython, SiSocketdotio, SiGit, SiHtml5, SiCss
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const SKILLS_ROW_1 = [
  { name: 'React',       Icon: SiReact,       color: '#61DAFB' },
  { name: 'Node.js',     Icon: SiNodedotjs,   color: '#339933' },
  { name: 'MongoDB',     Icon: SiMongodb,     color: '#47A248' },
  { name: 'Express.js',  Icon: SiExpress,     color: '#888' },
  { name: 'Java',        Icon: FaJava,        color: '#ED8B00' },
  { name: 'JavaScript',  Icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'Tailwind',    Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Python',      Icon: SiPython,      color: '#3776AB' },
]

const SKILLS_ROW_2 = [
  { name: 'Socket.io',   Icon: SiSocketdotio, color: '#010101' },
  { name: 'Git',         Icon: SiGit,         color: '#F05032' },
  { name: 'HTML5',       Icon: SiHtml5,       color: '#E34F26' },
  { name: 'CSS3',        Icon: SiCss,         color: '#1572B6' },
  { name: 'React',       Icon: SiReact,       color: '#61DAFB' },
  { name: 'Node.js',     Icon: SiNodedotjs,   color: '#339933' },
  { name: 'MongoDB',     Icon: SiMongodb,     color: '#47A248' },
  { name: 'Java',        Icon: FaJava,        color: '#ED8B00' },
]

function SkillPill({ name, Icon, color }) {
  return (
    <div className="skill-pill">
      <Icon size={20} style={{ color, flexShrink: 0 }} />
      <span>{name}</span>
    </div>
  )
}

function MarqueeRow({ skills, reverse = false }) {
  const doubled = [...skills, ...skills]
  return (
    <div className="marquee-wrapper" style={{ marginBottom: '1rem' }}>
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} {...skill} />
        ))}
      </div>
    </div>
  )
}

const CATEGORIES = [
  { label: 'Frontend',  items: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'] },
  { label: 'Backend',   items: ['Node.js', 'Express.js', 'Java', 'Socket.io'] },
  { label: 'Database',  items: ['MongoDB', 'Mongoose'] },
  { label: 'Tools',     items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Tech Stack</div>
          <h2 className="heading-lg" style={{ marginBottom: '0.75rem', marginTop: '0.5rem' }}>
            Skills &amp;{' '}
            <span className="text-gradient">Technologies</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: '3rem', maxWidth: 500 }}>
            The tools I use to bring ideas to life — from data layer to delightful UI.
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <MarqueeRow skills={SKILLS_ROW_1} />
          <MarqueeRow skills={SKILLS_ROW_2} reverse />
        </motion.div>

        {/* Category Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginTop: '3rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {CATEGORIES.map(cat => (
            <div key={cat.label} className="glass" style={{ padding: '1.5rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '0.75rem',
                }}
              >
                {cat.label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {cat.items.map(item => (
                  <span
                    key={item}
                    style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
