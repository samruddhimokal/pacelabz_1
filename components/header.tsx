'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glossy">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-white">
          Pace Labz
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link href="#why-us" className="hover:text-purple-300 transition-colors">Why Us</Link></li>
            <li><Link href="#ship-log" className="hover:text-purple-300 transition-colors">Ship Log</Link></li>
            <li><Link href="#about-me" className="hover:text-purple-300 transition-colors">About</Link></li>
            <li><Link href="#book-call" className="hover:text-purple-300 transition-colors">Book a Call</Link></li>
          </ul>
        </nav>
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link href="#why-us" className="block hover:text-purple-300 transition-colors" onClick={toggleMenu}>Why Us</Link>
            <Link href="#ship-log" className="block hover:text-purple-300 transition-colors" onClick={toggleMenu}>Ship Log</Link>
            <Link href="#about-me" className="block hover:text-purple-300 transition-colors" onClick={toggleMenu}>About</Link>
            <Link href="#book-call" className="block hover:text-purple-300 transition-colors" onClick={toggleMenu}>Book a Call</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

