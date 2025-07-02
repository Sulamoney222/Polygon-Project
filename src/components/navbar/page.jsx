'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Links } from '@/data'
import { FaBars, FaTimes, FaDiscord, FaTwitter } from 'react-icons/fa'
import { useTheme } from 'next-themes'
//import { Moon, Sun } from 'react-icons/fa'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66273f100889f2489acb2d8e_Polygon%20Logo%20Complete%20White.svg"
            alt="Polygon Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {Links.map(({ id, name, url }) => (
            <Link key={id} href={url} className="text-white hover:text-blue-400 transition font-medium">
              {name}
            </Link>
          ))}
        </nav>

        {/* Desktop Icons & Theme Toggle */}
        <div className="hidden md:flex items-center gap-5">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="w-5 h-5 text-white hover:text-blue-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-5 h-5 text-white hover:text-blue-400" />
          </a>
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              {/* {resolvedTheme === 'dark' ? 'Sun' : 'Moon'} */}
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button  className="md:hidden text-white cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white bg-opacity-95 backdrop-blur-md px-5 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {Links.map(({ id, name, url }) => (
              <Link key={id} href={url} onClick={() => setMenuOpen(false)} className="hover:text-blue-400 text-white font-medium">
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
            {mounted && (
              <button
                onClick={() => { toggleTheme(); setMenuOpen(false) }}
                aria-label="Toggle Dark Mode"
                className="ml-auto p-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition"
              >
                {/* {resolvedTheme === 'dark' ? 'Sun' : 'Moon'} */}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
)
}



// 'use client'
// import React, { useState } from 'react'
// import { Links } from '@/data'
// import Image from 'next/image'
// import Link from 'next/link'
// import { FaTwitter, FaDiscord, FaBars, FaTimes } from 'react-icons/fa'

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <header className="bg-black text-white sticky top-0 z-50">
//       <div className="flex justify-between items-center px-5 py-4 md:px-10">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66273f100889f2489acb2d8e_Polygon%20Logo%20Complete%20White.svg"
//             alt="Polygon Logo"
//             width={120}
//             height={40}
//             className="h-auto w-auto"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8">
//           {Links.map(({ id, name, url }) => (
//             <Link key={id} href={url} className="hover:text-blue-400 text-sm font-medium transition">
//               {name}
//             </Link>
//           ))}
//         </nav>

//         {/* Desktop Right Side */}
//         <div className="hidden md:flex items-center gap-5">
//           <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
//             <FaDiscord className="w-5 h-5 hover:text-blue-400" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaTwitter className="w-5 h-5 hover:text-blue-400" />
//           </a>
//           <a
//             href="https://docs.polygon.technology"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold rounded transition"
//           >
//             Polygon Docs
//           </a>
//         </div>

//         {/* Mobile Toggle Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-white focus:outline-none"
//         >
//           {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-5 pb-6 space-y-4 bg-gray-900">
//           <nav className="flex flex-col space-y-3">
//             {Links.map(({ id, name, url }) => (
//               <Link
//                 key={id}
//                 href={url}
//                 onClick={() => setMenuOpen(false)}
//                 className="block text-white hover:text-blue-400 text-sm"
//               >
//                 {name}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-5 pt-4">
//             <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
//               <FaDiscord className="w-5 h-5 hover:text-blue-400" />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <FaTwitter className="w-5 h-5 hover:text-blue-400" />
//             </a>
//             <a
//               href="https://docs.polygon.technology"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold rounded transition"
//             >
//               Docs
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navbar

