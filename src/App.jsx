import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Help from './components/Help'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950  text-white overflow-hidden">
      <NavBar/>
      <Hero/>
      <Features />
      <Pricing/>
      <Help/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
