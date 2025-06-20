'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const first = [
  { id: 1, head: '$45.14k', body: 'Total Contract Creators' },
  { id: 2, head: '$2.44B+', body: 'Transactions' },
  { id: 3, head: 12.98, body: 'Avg. Cost per txn' },
];

const second = [
  { id: 1, head: '$219.11M', body: 'Unique Addresses' },
  { id: 2, head: '$12.80B+', body: 'NFT Sales Volume' },
  { id: 3, head: 78.56, body: 'Deployed Smart Contracts' },
];

const Ecosystem = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
  }, []);
  
 

  return (
    <div className="w-full px-4 md:px-20 mt-20 md:mt-32">
      <div className="text-center mb-10">
        <h1 className="capitalize text-4xl md:text-6xl font-semibold leading-tight text-white">
          The largest and most thriving ecosystem
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8">
        <div className="flex flex-col gap-6" data-aos="fade-up">
          {first.map(({ id, head, body }) => (
            <div
              key={id}
              className="bg-black border border-zinc-800 shadow-xl shadow-zinc-900 rounded-2xl p-6 w-full md:w-72"
            >
              <h1 className={ head > 0 ?`text-red-600 text-3xl font-bold` : `text-3xl font-bold text-white`}>{head}</h1>
              <p className="text-stone-400 text-base mt-2">{body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
          {second.map(({ id, head, body }) => (
            <div
              key={id}
              className="bg-stone-900 border border-zinc-700 shadow-xl shadow-zinc-900 rounded-2xl p-6 w-full md:w-72"
            >
              <h1 className={head > 0 ? `text-3xl font-bold text-green-800` : `text-3xl font-bold text-white`}>{head}</h1>
              <p className="text-stone-400 text-base mt-2">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;







// import React from 'react';

// const Ecosystem = () => {
//   return (
//     <div className="w-full overflow-hidden">
//       <div className="overflow-x-auto whitespace-nowrap">
//         {[...Array(5)].map((_, index) => (
//           <div key={index} className="inline-block px-4">
//             <h1 className="text-4xl sm:text-5xl md:text-7xl">Ecosystem</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Ecosystem;
