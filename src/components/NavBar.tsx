import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-teal-500 font-bold text-xl">
          glassBead
        </Link>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        <div className="hidden md:flex space-x-8">
          <NavLink to="/" active={isActive('/')}>Home</NavLink>
          <NavLink to="/about" active={isActive('/about')}>About</NavLink>
          <NavLink to="/blog" active={isActive('/blog')}>Blog</NavLink>
          <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <NavLink to="/" active={isActive('/')} mobile>Home</NavLink>
          <NavLink to="/about" active={isActive('/about')} mobile>About</NavLink>
          <NavLink to="/blog" active={isActive('/blog')} mobile>Blog</NavLink>
          <NavLink to="/contact" active={isActive('/contact')} mobile>Contact</NavLink>
        </div>
      )}
    </nav>
  )
}

function NavLink({ 
  to, 
  children, 
  active, 
  mobile = false 
}: { 
  to: string
  children: React.ReactNode
  active: boolean
  mobile?: boolean 
}) {
  const baseStyles = active 
    ? "text-orange-500" 
    : "text-gray-300 hover:text-teal-500 transition-colors"
  const mobileStyles = mobile ? "block py-2" : ""
  
  return (
    <Link to={to} className={`${baseStyles} ${mobileStyles}`}>
      {children}
    </Link>
  )
}
