"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

// ✅ Video sources with titles only
const videos = [
  {
    src: "https://polytech-assets.polygon.technology/videos/unstoppable_domains_wide.mp4",
    title: "Unstoppable Domains",
  },
  {
    src: "https://polytech-assets.polygon.technology/videos/Lemon_wide.mp4",
    title: "Lemon",
  },
  {
    src: "https://polytech-assets.polygon.technology/videos/Aragon_wide.mp4",
    title: "Aragon",
  },
  {
    src: "https://polytech-assets.polygon.technology/videos/horizon_wide1.mp4",
    title: "Horizon",
  },
  {
    src: "https://polytech-assets.polygon.technology/videos/phantom_wallet_wide.mp4",
    title: "Phantom Wallet",
  },
  {
    src: "https://polytech-assets.polygon.technology/videos/intella_x_wide1.mp4",
    title: "Intella X",
  },
];

export default function VideoCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={1.2}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      className="w-full mt-6 transition-all px-4"
    >
      {videos.map((v, i) => (
        <SwiperSlide key={i} className="flex transition-all flex-col items-center">
          <video
            src={v.src}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg w-full transition-all h-auto max-h-[200px] object-cover"
          />
          <span className="mt-2 text-sm font-medium text-center">{v.title}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}







// npm install framer-motion
// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const videos = [
//   { src: "…unstoppable_domains_wide.mp4", title: "Unstoppable Domains", logo: "/logos/ud.png" },
//   { src: "…Lemon_wide.mp4", title: "Lemon", logo: "/logos/lemon.png" },
//   // etc.
// ];

// export default function FramerVideoCarousel() {
//   const [[index, direction], setIndex] = useState([0, 0]);
//   const next = () => setIndex([index + 1, 1]);
//   const prev = () => setIndex([index - 1, -1]);

//   const variants = {
//     enter: dir => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
//     center: { x: 0, opacity: 1 },
//     exit: dir => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <AnimatePresence custom={direction}>
//         <motion.div
//           key={index}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{ duration: 0.5 }}
//           className="flex flex-col items-center"
//         >
//           <video src={videos[index % videos.length].src} autoPlay muted loop playsInline className="rounded-lg w-full object-cover" />
//           <div className="mt-2 flex items-center space-x-2">
//             <img src={videos[index % videos.length].logo} alt="" className="h-6 w-6 object-contain" />
//             <span className="text-sm font-medium">{videos[index % videos.length].title}</span>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//       <button onClick={prev} className="absolute left-2 top-1/2">‹</button>
//       <button onClick={next} className="absolute right-2 top-1/2">›</button>
//     </div>
//   );
// }



// //autoScroll in css
// @keyframes scrollX {
//   from { transform: translateX(0); }
//   to { transform: translateX(-50%); }
// }
// .auto-scroll {
//   display: flex;
//   animation: scrollX 20s linear infinite;
// }
