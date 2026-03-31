import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import BigFeature from './components/BigFeature'
import AgentDemo from './components/AgentDemo'
import CoreServices from './components/CoreServices'
import KarmaChart from './components/KarmaChart'
import Testimonial from './components/Testimonial'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Changelog from './pages/Changelog'
import Status from './pages/Status'

function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <BigFeature />
      <AgentDemo />
      <CoreServices />
      <KarmaChart />
      <Testimonial />
      <CtaSection />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/status" element={<Status />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
