import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import HeroScene from '../3d/HeroScene'
import LoadingSpinner from '../ui/LoadingSpinner'

export default function Hero() {
  const { isDark } = useTheme()

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* 3D Canvas Background */}
      <div className="canvas-container">
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas
            camera={{ position: [0, 0, 6], fov: 55 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: false }}
          >
            <HeroScene isDark={isDark} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.4}
              maxPolarAngle={Math.PI * 0.7}
              minPolarAngle={Math.PI * 0.3}
            />
          </Canvas>
        </Suspense>
      </div>

      {/* Overlay gradient for readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'linear-gradient(to right, rgba(13,17,23,0.88) 45%, rgba(13,17,23,0.3) 100%)'
            : 'linear-gradient(to right, rgba(250,248,245,0.90) 45%, rgba(250,248,245,0.25) 100%)',
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <div
        className="section-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 2rem',
          paddingTop: '5rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ maxWidth: 640 }}
        >
          {/* Label */}
          <motion.div
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: '1.5rem' }}
          >
            Available for Opportunities
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="heading-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ marginBottom: '0.5rem' }}
          >
            Ashwani
            <br />
            <span className="text-gradient">Upadhyay</span>
          </motion.h1>

          <motion.p
            className="heading-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontWeight: 400 }}
          >
            Full-Stack Software Engineer
          </motion.p>

          {/* Subheading */}
          <motion.p
            className="body-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ maxWidth: 500, marginBottom: '2.5rem' }}
          >
            B.Tech CSE undergrad <span style={{ color: 'var(--accent)' }}>·</span> Graduating 2027 <span style={{ color: 'var(--accent)' }}>·</span> MERN Stack <span style={{ color: 'var(--accent)' }}>·</span> Java &amp; DSA enthusiast
          </motion.p>

          {/* CTAs */}
          <motion.div
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <a
              id="download-cv-btn"
              href="/Ashwani-Upadhyay_Resume.pdf"
              download
              className="btn-primary"
            >
              <FiDownload size={16} />
              Download CV
            </a>

            <a
              id="github-link"
              href="https://github.com/ashcodes2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FiGithub size={16} />
              GitHub
            </a>

            <a
              id="linkedin-link"
              href="https://linkedin.com/in/ashwani-upadhyay-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FiLinkedin size={16} />
              LinkedIn
            </a>
          </motion.div>

          {/* Tech tags */}
          <motion.div
            style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '2.5rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {['React', 'Node.js', 'MongoDB', 'Java', 'Socket.io', 'Tailwind'].map(tech => (
              <span key={tech} className="badge">{tech}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Scroll</span>
        <FiArrowDown size={16} />
      </motion.button>
    </section>
  )
}
