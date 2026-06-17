import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Ubicaciones from '@/components/ubicaciones'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Ubicaciones />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
