'use client'
import React from 'react'
import Link from 'next/link'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Links } from '@/data'

export default function Footer() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66273f100889f2489acb2d8e_Polygon%20Logo%20Complete%20White.svg"
            alt="Polygon Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-6">
          {Links.map(({ id, name, url }) => (
            <Link key={id} href={url} className="hover:text-blue-400 transition font-medium">
              {name}
            </Link>
          ))}
        </nav>

        {/* Social Icons + Theme Toggle */}
        <div className="flex items-center gap-5">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="w-5 h-5 hover:text-blue-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-5 h-5 hover:text-blue-400" />
          </a>
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            {resolvedTheme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Polygon. All rights reserved.
      </div>
    </footer>
  )
}
