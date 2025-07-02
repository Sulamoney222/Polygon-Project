'use client'
import React, { useState } from 'react'
import { Links } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaDiscord, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="flex justify-between items-center px-5 py-4 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66273f100889f2489acb2d8e_Polygon%20Logo%20Complete%20White.svg"
            alt="Polygon Logo"
            width={120}
            height={40}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {Links.map(({ id, name, url }) => (
            <Link key={id} href={url} className="hover:text-blue-400 text-sm font-medium transition">
              {name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="w-5 h-5 hover:text-blue-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-5 h-5 hover:text-blue-400" />
          </a>
          <a
            href="https://docs.polygon.technology"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold rounded transition"
          >
            Polygon Docs
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-6 space-y-4 bg-gray-900">
          <nav className="flex flex-col space-y-3">
            {Links.map(({ id, name, url }) => (
              <Link
                key={id}
                href={url}
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-blue-400 text-sm"
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 pt-4">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a
              href="https://docs.polygon.technology"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold rounded transition"
            >
              Docs
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
