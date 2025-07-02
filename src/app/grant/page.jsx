'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const performance = [
  {
    id: 1,
    head: 'Low cost',
    bpdy: {
      m1: 'Polygon zKEVM harnesses the power of ZK proofs to reduce transaction cost',
      m2: 'zkSNARK footprint size in L1 for user cost optimization',
      m3: 'Lowers total cost of usage for end users for a better user experience',
    },
  },
  {
    id: 2,
    head: 'High performance',
    bpdy: {
      m1: 'Fast network finality with frequent validity proofs',
      m2: 'Use of Polygon Zero technology, the fastest ZK proof in the world',
      m3: 'Developers can create different types of dApps for a variety of user experiences',
    },
  },
  {
    id: 3,
    head: 'EVM equivalence',
    bpdy: {
      m1: 'Deployment onto EVM without changes in code',
      m2: 'The vast majority of existing smart contracts, developer tools and wallets work seamlessly.',
      m3: 'Allows developers to focus on improving code rather than re-writing it',
    },
  },
  {
    id: 4,
    head: 'Security',
    bpdy: {
      m1: 'Ethereum security inherited in L2 with the additional benefit of L2 batching for scaling',
      m2: 'ZK proofs ensure transaction validity and safeguards user funds',
      m3: 'Assurance that information stored cannot be changed or corrupted',
    },
  },
]

const Accordion = [
  {
    id: 1,
    que: 'For anyone not familiar, what is Polygon zkEVM?',
    ans: `Polygon zkEVM is the leading zero knowledge scaling solution that’s equivalent with the Ethereum Virtual Machine, this means that most of the existing smart contracts, developer tools, and wallets work seamlessly.\nPolygon zkEVM harnesses the power of ZK proofs to reduce transaction cost and increase throughput, all while inheriting the security of Ethereum L1.`,
  },
  {
    id: 2,
    que: `What are the main features of Polygon zKEVM?`,
    ans: `1- Ethereum-equivalence: Most Ethereum smart contracts, wallets, tools, etc. work on Polygon zkEVM seamlessly.\n2- Inherits Ethereum security\n3- Lower cost compared to L1 and better finality than other L2 solutions like Optimistic Rollups\n4- ZKP-powered scalability, and aiming at similar throughput to PoS`,
  },
  {
    id: 3,
    que: `What is so unique about zkEVMs?`,
    ans: `Many people in crypto believed that a zkEVM was years away. Polygon Labs believes it achieved full EVM equivalence while offering better performance than alt-L1s and other rollups.`,
  },
  {
    id: 4,
    que: `Why is EVM Equivalence needed?`,
    ans: `EVM-equivalent: Ethereum isn’t just a blockchain. It’s a rich ecosystem. zkEVM keeps the developer and user experience nearly identical to Ethereum L1, while offering better scalability.`,
  },
  {
    id: 5,
    que: `What EVM opcodes are different on Polygon zKEVM?`,
    ans: `SELFDESTRUCT: removed by SENDALL\nEXTCODEHASH: returns hash from zkEVM state tree\nDIFFICULTY: returns 0\nBLOCKCHASH: returns all previous block hashes\nNUMBER: number of processable transactions`,
  },
  {
    id: 6,
    que: `Which opcodes are missing in the current zkEVM version?`,
    ans: `zkEVM supports all opcodes but SHA256, BLAKE and PAIRINGS.`,
  },
  {
    id: 7,
    que: `Can this layer 2 zkEVM work with other chains?`,
    ans: `Not at launch, but cross-chain L2 to L2 transfers are roadmap features.`,
  },
]

const Grant = () => {
  const [email, setEmail] = useState('')
  const [submit, setSubmit] = useState(false)

  const [openIndex, setOpenIndex] = useState(null)

const toggleAccordion = (index) => {
  setOpenIndex(prev => (prev === index ? null : index))
}

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const handleSubmit = () => {
    if (email.trim()) {
      setSubmit(true)
      setEmail('')
      setTimeout(() => setSubmit(false), 3000)
    }
  }

  return (
    <section className="bg-black text-white px-4 py-12 max-w-7xl mx-auto space-y-16">
      
      {/* Hero */}
      <div className="flex flex-col lg:flex-row items-center gap-8" data-aos="fade-up">
        <video
          className="w-full lg:w-1/2 rounded-lg"
          muted autoPlay playsInline
          src="https://polytech-assets.polygon.technology/videos/solutions/zkevm720p.mp4"
        />
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">Bring Ethereum to <span className="text-blue-400">everyone</span></h1>
          <p className="text-lg">
            Polygon zkEVM Beta is the leading ZK scaling solution that is equivalent to Ethereum Virtual Machine...
          </p>
          <Link href="/">
            <button className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Performance Grid */}
      <div data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-8">Ethereum-scale with zkEVM performance & security</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {performance.map(({ id, head, bpdy }) => (
            <div key={id} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition" data-aos="zoom-in">
              <h3 className="text-2xl font-semibold mb-4">{head}</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-200">
                {Object.values(bpdy).map((msg, i) => (
                  <li key={i}>{msg}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Feature image and text */}
      <div className="flex flex-col lg:flex-row items-center gap-10" data-aos="fade-up">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold">EVM equivalence and secure scalability</h2>
          <p className="text-gray-200">
            Polygon zkEVM Beta harnesses the power of ZK proofs to reduce transaction cost and massively increase throughput...
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63b5edddfd604202a584ca9e_ZKEVM.svg"
            alt="ZkEVM graphic"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* FAQ Accordion */}
     <div data-aos="fade-up">
  <h2 className="text-3xl font-semibold mb-6">Polygon zkEVM FAQ</h2>
  <div className="space-y-4">
    {Accordion.map(({ id, que, ans }, index) => {
      const isOpen = openIndex === index
      return (
        <div
          key={id}
          className="bg-gray-900 p-4 rounded-lg transition-all duration-300 ease-in-out"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left font-medium text-white focus:outline-none hover:text-blue-400"
          >
            {que}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-gray-200 whitespace-pre-line">{ans}</p>
          </div>
        </div>
      )
    })}
  </div>

  <Link href="/staking" legacyBehavior>
    <a className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
      Read More
    </a>
  </Link>
</div>


      {/* Subscribe */}
      <div data-aos="fade-up" className="max-w-xl mx-auto text-center border border-white rounded-lg p-8 space-y-4">
        {!submit ? (
          <>
            <h2 className="text-2xl font-semibold">Get updates straight to your email</h2>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 bg-transparent border border-white rounded placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </>
        ) : (
          <div className="text-green-400 text-lg font-medium">
            🎉 Thank you! You’re on the list.
          </div>
        )}
      </div>
    </section>
  )
}

export default Grant
