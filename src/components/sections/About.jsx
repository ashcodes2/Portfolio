import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      {/* Glow accent */}
      <div
        className="glow-dot"
        style={{ background: 'var(--accent-soft)', top: '10%', right: '-5%', opacity: 0.5 }}
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className="section-label" variants={fadeUp}>
            About Me
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
              marginTop: '1rem',
            }}
          >
            {/* Left: Text */}
            <motion.div variants={fadeUp}>
              <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
                Building things that{' '}
                <span className="text-gradient">matter.</span>
              </h2>

              <p className="body-lg" style={{ marginBottom: '1.25rem' }}>
                I'm a Computer Science undergraduate at AKTU, expected to graduate in{' '}
                <strong style={{ color: 'var(--accent)' }}>2027</strong>. I'm passionate about
                building fast, scalable, and user-centric web applications using the{' '}
                <strong style={{ color: 'var(--text-primary)' }}>MERN stack</strong>.
              </p>

              <p className="body-lg" style={{ marginBottom: '1.25rem' }}>
                Beyond the web, I invest heavily in{' '}
                <strong style={{ color: 'var(--text-primary)' }}>Data Structures &amp; Algorithms</strong>{' '}
                (primarily in <strong style={{ color: 'var(--accent)' }}>Java</strong>) —
                believing that strong fundamentals are the backbone of elegant software.
              </p>

              <p className="body-lg">
                When I'm not coding, I'm exploring new tech, contributing to open source, or
                building side projects that solve real-world problems.
              </p>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'University', value: 'AKTU' },
                  { label: 'Graduation', value: '2027' },
                  { label: 'Focus',  value: 'MERN + DSA' },
                  { label: 'Language', value: 'Java / JS' },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      {item.label}
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Glassmorphic info card */}
            <motion.div variants={fadeUp}>
              <div className="glass" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 160,
                    height: 160,
                    borderRadius: '50%',
                    background: 'var(--accent-glow)',
                    filter: 'blur(50px)',
                  }}
                />

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  // profile.json
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { key: 'name',       val: '"Ashwani Upadhyay"'   },
                    { key: 'role',       val: '"Full-Stack Dev"'       },
                    { key: 'stack',      val: '["React","Node","MongoDB","Java"]' },
                    { key: 'interests',  val: '["DSA","Open Source","AI"]' },
                    { key: 'status',     val: '"Open to Internships ✓"' },
                  ].map(({ key, val }) => (
                    <div key={key} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
                      <span style={{ color: 'var(--accent-pink)' }}>{key}</span>
                      <span style={{ color: 'var(--text-muted)' }}>: </span>
                      <span style={{ color: 'var(--text-primary)' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
