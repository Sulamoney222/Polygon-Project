
import Image from 'next/image';
import React from 'react';

const sleeves = [
  {
    id: 1,
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/662813e376dafcc7ad456041_Sustainablity.png',
    head: 'Connect IRL',
    body: 'Meet up with our community at hackathons, conferences, and events worldwide',
    url: '',
  },
  {
    id: 2,
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6628148a5d4623616683b6fe_Build.png',
    head: 'Explore POL',
    body: 'POL is the currency of Polygon that enables users to interact with tens of thousands of dApps in our ecosystem.',
    url: '',
  },
  {
    id: 3,
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6628148e74d09ee6472ee9a0_Connect.webp',
    head: 'Govern',
    body: 'Participate in shaping Polygon protocols',
    url: '',
  },
  {
    id: 4,
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/662813e465f95ba4ceb1852f_Explore-1.png',
    head: 'Govern',
    body: 'Get to know our modular, flexible framework that provides solutions and supports building a variety of applications',
    url: '',
  },
];

const IRL = () => {
  
  return (
    <div className="w-full px-4 md:px-12 overflow-hidden lg:px-20 py-16 text-white">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-semibold">Time to roll up your sleeves</h1>
      </div>

      <div className="flex  max-sm:max-w-80 max-sm:overflow-y-auto gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
        {sleeves.map(({ id, img, head, body, url }) => (
          <div
            key={id}
            className="min-w-[280px] sm:min-w-0 flex-shrink-0 bg-stone-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <img src={img} alt={head} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{head}</h2>
              <p className="text-stone-400  text-sm">{body}</p>
             
                <a
                  href={url}
                  className="mt-4 inline-block text-blue-400 hover:underline text-sm font-medium"
                >
                  Learn more →
                </a>
             
            </div>
          </div>
        ))}
      </div>


    <div className="w-full max-w-md mx-auto px-4 py-8">
  <h2 className="text-2xl font-semibold text-center mb-4">Get our newsletter</h2>
  <div className="flex flex-col sm:flex-row items-center gap-4">
    <input
      className="flex-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="email"
      placeholder="Enter your email"
    />
    <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
      Subscribe
    </button>
  </div>
</div>
<div className="flex justify-center">
      <Image
      className='w-max '
      width={40}
      height={40}
      src='https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66273f100889f2489acb2d8e_Polygon%20Logo%20Complete%20White.svg'/>
      </div>


    </div>
  );
};

export default IRL;
