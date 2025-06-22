'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

//https://polytech-assets.polygon.technology/videos/pol/Web%20Hero%20.mp4

const POL= [
    {   
        id:1,
        vid: 'https://polytech-assets.polygon.technology/videos/matic/02_gas_token.mp4%20(540p).mp4',
        head:'GAS Token',
        body: `POL is the lifeblood of Polygon PoS. When you conduct any transaction or use an application built on Polygon PoS, you'll pay a bit of gas in POL. This incentivizes validators to process and verify transactions, ensuring the network remains functional and secure.`
    },
    {   
        id:1,
        vid: 'https://polytech-assets.polygon.technology/videos/matic/03_network_and_security.mp4%20(720p).mp4',
        head:'Network Security',
        body: `Polygon employs a proof-of-stake mechanism that uses staked POL to reach consensus across the network. By staking POL, you can secure Polygon PoS and earn rewards. Validators are disincentivized from engaging in malicious behavior, maintaining the network's integrity.`
    },
    {   
        id:3,
        vid: 'https://polytech-assets.polygon.technology/videos/matic/04_governance.mp4%20(720p).mp4',
        head:'Governance',
        body: `Validators play an even more special role on Polygon PoS. They implement Polygon Improvement Proposals (PIPs) and contribute to the decentralization of Polygon PoS, ensuring the network evolves based on community consensus.`
    },
     {   
        id:4,
        vid: 'https://polytech-assets.polygon.technology/videos/agg-summit/grants-developers.mp4',
        head:'Community Fuel',
        body: `POL powers sustainable growth through a unique emissions model, with a portion of the emissions dedicated to funding community-driven initiatives. This supports ongoing development and innovation within the Polygon network.`
    },
    {   
        id:5,
        vid: 'https://polytech-assets.polygon.technology/videos/matic/04_governance.mp4%20(720p).mp4',
        head:'Hyperproductive Token',
        body: `POL introduces the concept of a hyperproductive token, enabling validators to secure multiple chains and participate in diverse roles across the Polygon aggregated network of blockchains. This approach enhances security, scalability, and overall productivity..`
    }
]


const Page = () => {
  const [email, setEmail] = useState('');
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = () => {
    if (email.trim()) {
      setSubmit(true);
    }
  };

  return (
    <section className="bg-black text-white px-4 py-12 space-y-16">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center space-y-6" data-aos="fade-up">
        <div className="w-full aspect-video rounded overflow-hidden shadow-lg">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://polytech-assets.polygon.technology/videos/pol/Web%20Hero%20.mp4" type="video/mp4" />
          </video>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold">Powering the Polygon experience</h1>
        <p className="max-w-3xl mx-auto">
          POL is the native token of Polygon that enables users to interact with dApps across blockchains. It also secures the network through staking.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">Upgrade To POL</button>
          <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
            Read Announcement
          </button>
        </div>
      </div>

      {/* POL Use Cases */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {POL.map((item, i) => (
          <div key={item.id} className="border border-white rounded-lg p-4 space-y-4" data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="aspect-video rounded overflow-hidden">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src={item.vid} type="video/mp4" />
              </video>
            </div>
            <h3 className="text-xl font-semibold">{item.head}</h3>
            <p className="text-sm">{item.body}</p>
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
  );
};

export default Page;