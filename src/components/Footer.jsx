import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: '3rem 1.5rem',
      }}
    >
      <div
        className="section-inner"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '1.2rem',
            color: 'var(--accent)',
          }}
        >
          &lt;AU /&gt;
        </span>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {[
            { Icon: FiGithub,   href: 'https://github.com/ashcodes2',                 id: 'footer-github'   },
            { Icon: FiLinkedin, href: 'https://linkedin.com/in/ashwani-upadhyay-dev',  id: 'footer-linkedin' },
            { Icon: FiMail,     href: 'mailto:avinash744826@gmail.com',                id: 'footer-mail'     },
          ].map(({ Icon, href, id }) => (
            <a
              key={id}
              id={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          © {year} Ashwani Upadhyay · Built with
          <FiHeart size={12} style={{ color: 'var(--accent-pink)' }} />
          using React &amp; Three.js
        </p>
      </div>
    </footer>
  )
}
