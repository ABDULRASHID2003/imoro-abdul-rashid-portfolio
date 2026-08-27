import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Certifications } from './components/Certifications'
import { Strengths } from './components/Strengths'
import { Interests } from './components/Interests'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Strengths />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
