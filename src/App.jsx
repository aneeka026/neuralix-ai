import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Create from './pages/Create.jsx'
import Studios from './pages/Studios.jsx'
import Showcase from './pages/Showcase.jsx'
import Models from './pages/Models.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <div className="container-px mx-auto flex max-w-2xl flex-col items-center py-48 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-6 text-4xl font-semibold text-white">This page hasn't been created yet.</h1>
      <p className="mt-4 text-mist-400">Let's get you back to the workspace.</p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/studios" element={<Studios />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/models" element={<Models />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
