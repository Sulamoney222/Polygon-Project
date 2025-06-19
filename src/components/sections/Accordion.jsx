'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const arr = [
  {
    id: 1,
    img : 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6627f9826f904bd43deab8ab_POS.png',
    head: 'Polygon PoS',
    body: 'Support the most widely used Etherum scaling ecosystem that offers EVM compatibilty and an ultimate user experience with fast transactions at near zero gas fees today',
  },
  {
    id: 2,
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6627f982ced95085485618e1_Zkevm.png',
    head: 'Polygon zKEVM',
    body: 'Unlock Etherum scalabilty while maintaining security with the first zk-Rollup that offers EVM equivalence with fast transactions at near-zero cost today',
  },
  {
    id: 3,
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66281083d2407fe91a7aa595_miden-placeholder.png',
    head: 'Midden',
    body: 'A decentralized rollup that leverages private data storage and local transaction execution. Because privacy scales better',
  },
];

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="items-center mt-12">
      <div className="w-full max-md:text-left md:text-center">
        <h1 className="max-sm:text-4xl font-semibold sm:text-5xl capitalize md:text-6xl">
          The most adopted scaling technology
        </h1>
      </div>

      <div className="mt-8 md:mt-10 w-full">
        {/* Header with toggle only on mobile */}
        <div className="w-full md:hidden bg-gray-800 flex justify-between p-3 font-medium leading-tight text-base rounded">
          <h3>Public Chains</h3>
          <button onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer">
            {isOpen ? '▲' : '▼'}
          </button>
        </div>

        {/* Mobile: Accordion-style */}
        {isOpen && (
          <div className="md:hidden overflow-hidden transition-all duration-500">
            {arr.map(({ id, head, body, img }) => (
              <div key={id} className="mt-8 bg-gray-950">
                <Image 
                  width={80}
                  height={80}
                  alt="polygon"
                  className="w-full max-w-xs p-3 object-contain"
                  src={img}
                />
                <h2 className="p-3 text-xl sm:text-2xl font-bold">{head}</h2>
                <p className="p-3 text-sm sm:text-base text-gray-400">{body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Desktop: Always shown */}
        <div className="hidden md:block">
          <h3 className="text-xl font-semibold mb-4">Public Chains</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {arr.map(({ id, head, body, img }) => (
              <div key={id} className="bg-gray-950 rounded-md p-4">
                <Image 
                  width={80}
                  height={80}
                  alt="polygon"
                  className="w-full max-w-xs mx-auto object-contain mb-4"
                  src={img}
                />
                <h2 className="text-2xl font-bold text-center">{head}</h2>
                <p className="text-base text-gray-400 text-center mt-2">{body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Accordion;




// 'use client'
// import Image from 'next/image';
// import React, { useState } from 'react';

// const accordionItems = [
//   {
//     id: 1,
//     img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6627f9826f904bd43deab8ab_POS.png',
//     head: 'Polygon PoS',
//     body: 'Support the most widely used Ethereum scaling ecosystem that offers EVM compatibility and an ultimate user experience with fast transactions at near zero gas fees today',
//   },
//   {
//     id: 2,
//     img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6627f982ced95085485618e1_Zkevm.png',
//     head: 'Polygon zKEVM',
//     body: 'Unlock Ethereum scalability while maintaining security with the first zk-Rollup that offers EVM equivalence with fast transactions at near-zero cost today',
//   },
//   {
//     id: 3,
//     img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66281083d2407fe91a7aa595_miden-placeholder.png',
//     head: 'Midden',
//     body: 'A decentralized rollup that leverages private data storage and local transaction execution. Because privacy scales better',
//   },
// ];

// const Accordion = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleItem = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="mt-8 w-full max-w-4xl mx-auto px-4">
//       <div className="text-center">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold capitalize text-white">
//           The most adopted scaling technology
//         </h1>
//       </div>

//       <div className="mt-10 space-y-4">
//         {accordionItems.map((item, index) => (
//           <div key={item.id} className="border rounded bg-gray-800 text-white">
//             <button
//               className="flex items-center justify-between w-full px-4 py-3 focus:outline-none"
//               onClick={() => toggleItem(index)}
//             >
//               <span className="text-lg font-medium">{item.head}</span>
//               <span>{openIndex === index ? '▲' : '▼'}</span>
//             </button>

//             {openIndex === index && (
//               <div className="px-4 pb-4 pt-2 bg-gray-900 rounded-b">
//                 <Image
//                   src={item.img}
//                   alt={item.head}
//                   width={80}
//                   height={80}
//                   className="mb-2"
//                 />
//                 <p className="text-sm text-gray-300">{item.body}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Accordion;
