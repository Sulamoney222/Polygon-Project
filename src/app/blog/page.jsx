'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const items = [
  {
    id: 1,
    head: 'Enhanced Performance',
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66964105e8e7ef1d860f124e_newdrawer.avif',
    body: 'Polygon Plonky3 will further reduce proof generation times, making it even faster than Plonky2...',
  },
  {
    id: 2,
    head: 'Improved Scalability',
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66964105efde9777522eb138_filter.avif',
    body: 'With Polygon Plonky3, the aim is to handle even larger datasets...',
  },
  {
    id: 3,
    head: 'Advanced Recursion',
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66964105157d3fd02b945f30_cc.avif',
    body: 'Polygon Plonky3 will support more efficient recursive proofs...',
  },
  {
    id: 4,
    head: 'Modularity',
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66964105bb5956ed66fb248a_co.avif',
    body: 'Polygon Plonky3 is modular across finite field and hash functions...',
  },
]

const learn = [
  {
    id: 1,
    head: 'Stability & Innovation',
    body: 'High volume requires stability. Polygon PoS is battle-tested...',
  },
  {
    id: 2,
    head: 'Account Abstraction',
    body: 'Polygon PoS brings Ethereum’s latest features early...',
  },
  {
    id: 3,
    head: 'Developer Tooling & Composability',
    body: 'Developers tap out-of-the-box solutions for bespoke projects...',
  },
]

const Blog = () => {
  const [email, setEmail] = useState('')
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const handleSubmit = () => {
    if (email.trim()) {
      setSubmit(true)
      setEmail('')
      setTimeout(() => setSubmit(false), 3000)
    }
  }

  return (
    <section className="bg-black text-white px-4 md:px-16 py-10 space-y-20">
      
      {/* Hero Section */}
      <div data-aos="fade-up" className="space-y-6 text-center">
        <video className="w-full rounded-lg" playsInline loop muted autoPlay>
          <source src="https://polytech-assets.polygon.technology/videos/plonky/hero_plonky-new.mp4" type="video/mp4" />
        </video>
        <h1 className="text-3xl md:text-5xl font-bold">Polygon Plonky3 enables you to build modern zk-rollups</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Lightning fast and modular, Polygon Plonky3 is a build-your-own adventure of ZK proving systems...
        </p>
      </div>

      {/* Info Section */}
      <div data-aos="fade-up" className="space-y-6 max-w-5xl mx-auto text-center">
        <Image
          src="https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6683a91f54418aca7d0ca1c2_why-plonkey%20(1).png"
          alt="Why Plonky3"
          width={800}
          height={400}
          className="mx-auto rounded-lg"
        />
        <h1 className="text-3xl font-bold">Why is Polygon Plonky3 important?</h1>
        <p className="text-gray-400">Unlimited scale, securely. Polygon Plonky3 is a modular proving system...</p>

        <h1 className="text-3xl font-bold">What is Polygon Plonky3?</h1>
        <p className="text-gray-400">In ZK scaling tech, the proving system is the mathematical framework that ensures cryptographic security...</p>
      </div>

      {/* Features Grid */}
      <div data-aos="fade-up" className="grid md:grid-cols-2 gap-8 border border-gray-700 rounded-lg p-6 bg-stone-900">
        {items.map(({ id, head, img, body }) => (
          <div key={id} data-aos="fade-up" className="space-y-4">
            <Image src={img} alt={head} width={600} height={300} className="rounded" />
            <h2 className="text-xl font-semibold">{head}</h2>
            <p className="text-gray-400">{body}</p>
          </div>
        ))}
      </div>

      {/* Learn Section */}
      <div className="text-center" data-aos="fade-up">
        <h3 className="text-blue-400 tracking-widest">LEVEL UP</h3>
        <h1 className="text-4xl font-bold">Resources</h1>
        <h3 className="text-gray-400">Learn more. Build more. Repeat.</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up">
        {learn.map(({ id, head, body }) => (
          <div key={id} data-aos="fade-up" className="p-4 border border-gray-600 rounded-lg bg-stone-800 space-y-3">
            <h2 className="text-xl font-semibold">{head}</h2>
            <p className="text-gray-300">{body}</p>
          </div>
        ))}
      </div>

      {/* Subscribe Section */}
      <div data-aos="fade-up" className="max-w-xl mx-auto text-center border border-white rounded-lg p-6">
        {!submit ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Get updates straight to your email</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 mb-4 bg-transparent border border-white rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </>
        ) : (
          <div className="text-green-500 text-lg font-medium">🎉 Thank you! You’re on the list.</div>
        )}
      </div>

    </section>
  )
}

export default Blog
