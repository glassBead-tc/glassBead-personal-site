import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import DigitalRain from './components/DigitalRain'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
        <DigitalRain />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
