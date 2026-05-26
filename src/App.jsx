import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import Navbar    from './components/Navbar'
import Hero      from './components/sections/Hero'
import About     from './components/sections/About'
import Skills    from './components/sections/Skills'
import DSA       from './components/sections/DSA'
import Experience from './components/sections/Experience'
import Projects  from './components/sections/Projects'
import Labs      from './components/sections/Labs'
import Contact   from './components/sections/Contact'
import Footer    from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <DSA />
        <Experience />
        <Projects />
        <Labs />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
