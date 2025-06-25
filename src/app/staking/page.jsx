'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

// gsap.registerPlugin(ScrollTrigger);

const rewards = [
  {
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63ad10a4f5bff05b8a610e9d_value-card-guild2.avif',
    head: 'Earn Rewards',
    body: '12% of the total supply of 10 Billion POL is allocated to fund staking rewards. As a validator, you set your own commission...'
  },
  {
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63ad10a484f78541b4d87e79_value-card-guild1.avif',
    head: 'Build the future',
    body: 'You do not need energy-intensive computers to stake, which lessens environmental impact. Each node consumes ~546 kWh/year.'
  },
  {
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63ad10a484f78541b4d87e79_value-card-guild1.avif',
    head: 'Stake Sustainably',
    body: 'Polygon PoS is one of the most used protocols. By staking, you help build the technology of Web3.'
  }
];

const stakeOptions = [
  {
    id: 1,
    head: 'Become A Professional',
    vid: 'https://polytech-assets.polygon.technology/videos/staking/Validator.mp4',
    body: 'Validators verify transactions and add new blocks on the blockchain...'
  },
  {
    id: 2,
    head: 'Become A Delegator',
    vid: 'https://polytech-assets.polygon.technology/videos/staking/delegator.mp4',
    body: 'Participate as a delegator to earn rewards and contribute to network security...'
  }
];

const faqs = [
  { q: 'What is staking?', a: 'Staking means locking up your tokens to support network operations.' },
  { q: 'How much can I earn?', a: 'Current rewards are around 4.95% APY, subject to network activity.' },
  { q: 'Is staking safe?', a: 'Yes, Polygon PoS uses audited smart contracts and community oversight.' },
  { q: 'Can I unstake anytime?', a: 'Yes – but there is an unbonding period (usually ~30 days).' },
  { q: 'What are validator vs delegator?', a: 'Validator runs a node; delegator delegates tokens to a validator.' },
  { q: 'How do commissions work?', a: 'Validators set commission fees; you can choose low-commission ones.' },
  { q: 'What if a validator fails uptime?', a: 'Poor performance may lead to lower rewards or temporary disablement.' },
  { q: 'Does staking require a lot of technical skill?', a: 'Delegators only need a wallet and POL tokens.' },
  { q: 'Are there penalties for misbehavior?', a: 'Yes – validators can be slashed for misconduct.' },
  { q: 'Where can I check my staking rewards?', a: 'Use Polygon’s staking dashboard or block explorers.' }
];

const Stake = () => {
  const sectionRef = useRef(null);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });
}, []);

  
  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-4 py-12 space-y-16">
      {/* Hero Section */}
      <div 
      data-aos="fade-up"
      className="flex flex-col-reverse lg:flex-row items-center gap-8 reveal">
        <div data-aos="fade-right"
        className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">Earn rewards while securing the Polygon PoS network</h2>
          <p>Anyone can use POL tokens to help safeguard the network and earn rewards.</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded">Become A Delegator</button>
        </div>
        <div 
        data-aos="fade-left"
        className="lg:w-1/2">
          <video autoPlay muted loop playsInline className="w-full rounded shadow-lg">
            <source src={stakeOptions[1].vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      

      {/* Rewards */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 reveal" data-aos="fade-up">Why stake on Polygon?</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {rewards.map((r,i) => (
            <div key={i} 
            data-aos="zoom-in"
            className="min-w-[250px] flex-shrink-0 p-4 bg-white rounded shadow reveal" data-aos="fade-up">
              <img src={r.img} alt={r.head} className="h-40 w-full object-cover rounded" />
              <h3 className="mt-4 font-semibold">{r.head}</h3>
              <p className="mt-2 text-sm">{r.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Current APR */}
      <div className="reveal" data-aos="zoom-in">
        <div className="inline-block border-2 border-gray-300 rounded-lg px-6 py-4">
          <h1 className="text-4xl font-bold">4.95% APY</h1>
          <p className="uppercase mt-1">Current Reward Rate</p>
        </div>
      </div>

      {/* How to Stake */}
      <div className="reveal space-y-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold">How to stake?</h2>
        <p>Polygon PoS chain runs on Proof of Stake. Anyone can become a validator or delegator using POL tokens.</p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 overflow-x-auto scroll-bar-hide pb-4">
          {stakeOptions.map(opt => (
            <div key={opt.id} className="min-w-[300px] flex-shrink-0 bg-stone-800 rounded shadow p-4" data-aos="fade-up">
              <h3 className="font-semibold">{opt.head}</h3>
              <video autoPlay muted loop playsInline className="mt-2 rounded">
                <source src={opt.vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2 text-sm">{opt.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Validator Performance */}
      <div className="reveal" data-aos="fade-up">
        <h2 className="text-2xl font-semibold">Validator Performance Metric</h2>
        <p>Validator Performance Metrics help regulate network participation via:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Setting up a Performance Benchmark for a measurement period</li>
          <li>Identifying healthy and under-performing validators</li>
          <li>Communicating with under-performing validators</li>
          <li>Regularly showcasing validator performance</li>
          <li>Off-boarding unhealthy validators</li>
        </ul>
      </div>

      {/* FAQ Accordion */}
      <div className="reveal" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((f,i) => (
            <div key={i} className="border rounded overflow-hidden">
              <button
                onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                className="w-full text-left px-4 py-2 bg-stone-800 hover:bg-gray-700 flex cursor-pointer justify-between items-center"
              >
                <span>{f.q}</span>
                <span className="text-xl">{activeFAQ === i ? '–' : '+'}</span>
              </button>
              <div
                className={`px-4 overflow-hidden transition-all duration-300 ${activeFAQ === i ? 'max-h-40 py-2' : 'max-h-0'}`}
              >
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stake;