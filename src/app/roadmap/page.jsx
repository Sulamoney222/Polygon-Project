'use client'
//https://download-video-ak.vimeocdn.com/v3-1/playback/d99d264d-12be-40e0-9e72-61140a2c1e10/f4c4005c?__token__=st=1750445241~exp=1750448841~acl=%2Fv3-1%2Fplayback%2Fd99d264d-12be-40e0-9e72-61140a2c1e10%2Ff4c4005c%2A~hmac=a23ad60df016b0e3da4da26b4ee9ddade85cda277d3517fc874b31227c7fb62d&r=dXMtd2VzdDE%3D

//photos
//https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64da1d62343169203747b879_Sandeep_hyperproductive.avif
//https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64dc7c275d6c06f472ed8d65_changes_ecosystem.avif
//https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64dc7c266f35a1fa4dd1d2c0_poly2.0_special.avif
//https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64da1d3bb170726717b9d5e5_Jordi_value.avif
//https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64da1dd59557ebac6db7e6b7_jordi_liquidity.avif
//https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64da1e469557ebac6db8488a_aggregator.avif
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  "https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64da1d62343169203747b879_Sandeep_hyperproductive.avif",
  "https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64dc7c275d6c06f472ed8d65_changes_ecosystem.avif",
  "https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64dc7c266f35a1fa4dd1d2c0_poly2.0_special.avif",
  "https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64da1d3bb170726717b9d5e5_Jordi_value.avif",
  "https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64da1dd59557ebac6db7e6b7_jordi_liquidity.avif",
  "https://cdn.prod.website-files.com/637359c81e22b715cec245ad/64da1e469557ebac6db8488a_aggregator.avif"
];

const Roadmap = () => {
  const sectionRef = useRef();
  const [email, setEmail] = useState('')
  const [submit, setSubmit] = useState(false)
  
  const handleSubmit = ()=>{
   if(email.trim() !== ''){
     setEmail('')
    setSubmit(true)
    setTimeout(()=>setSubmit(false),3000)
   }
  }

  useEffect(() => {
    AOS.init({ duration: 1200 });

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white text-black py-16 px-6 md:px-20">
      {/* Hero Section */}
      <div data-aos="fade-up" className="max-w-3xl mx-auto text-center mb-16">
        <h5 className="text-indigo-600 font-semibold uppercase tracking-widest mb-2">A new thesis</h5>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Aggregate Blockchains</h1>
        <p className="text-lg text-gray-700 mb-6">
          A web3 future that brings together the best of monolithic and modular designs. Offering users and developers a seamless, unified environment across many chains that can scale to the size of the internet.
        </p>
        <button className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition duration-300">Learn More</button>
      </div>

      {/* Roadmap Section */}
      <div data-aos="fade-right" className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Polygon Roadmap</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
          {images.map((src, index) => (
            <div key={index} className="min-w-[250px] md:min-w-[350px] snap-start shrink-0 rounded-lg overflow-hidden shadow-md">
              <img src={src} alt={`Polygon Roadmap ${index}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Email Subscribe */}
      
        <div data-aos="fade-up" className="bg-gray-100 rounded-lg p-6 mb-10 max-w-xl mx-auto text-center">
 
    { !submit ? (
      <>
      <h2 className="text-2xl font-semibold mb-4">Get updates straight to your email</h2>
      <input
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
       onClick={handleSubmit}
        className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition"
      >
        Subscribe
      </button>
    </>) :
      ( 
    <div className="text-green-600 text-lg font-medium">
      🎉 Thank you! You’re on the list.
    </div>
      )
    }
 
</div>
   


      {/* Twitter Section */}
      <div data-aos="fade-up" className="text-center">
        <h2 className="text-2xl font-semibold mb-4">See Twitter Announcements First</h2>
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">Follow us on Twitter</button>
      </div>
    </section>
  );
};

export default Roadmap;


