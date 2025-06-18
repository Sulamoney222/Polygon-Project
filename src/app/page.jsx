import Image from "next/image";
//https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6627414178f226ce86b98804_right.svg
//https://cdn.prod.website-files.com/637359c81e22b715cec245ad/662741410889f2489acd78d8_left.svg
//https://polytech-assets.polygon.technology/videos/homepage/newsletter.mp4
//https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6464a7ec8c8fd22869e80364_home-hero-new-bg1.svg
//https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6486fd415a318e62764b3a6c_arrow-right.svg


//videos_Carousel
//https://polytech-assets.polygon.technology/videos/unstoppable_domains_wide.mp4
//https://polytech-assets.polygon.technology/videos/Lemon_wide.mp4
//https://polytech-assets.polygon.technology/videos/Aragon_wide.mp4
//https://polytech-assets.polygon.technology/videos/horizon_wide1.mp4
//https://polytech-assets.polygon.technology/videos/phantom_wallet_wide.mp4
//https://polytech-assets.polygon.technology/videos/intella_x_wide1.mp4

import Image from "next/image";

export default function Home() {
  return (
    <section className="relative max-w-7xl mx-auto flex justify-center max-md:p-8">

      {/* Optional background image (add Tailwind positioning if needed) */}
      <Image
        src="https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6464a7ec8c8fd22869e80364_home-hero-new-bg1.svg"
        alt="Background Pattern"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-10 pointer-events-none"
      />

      <div className="relative z-10 mt-10 w-full flex flex-col items-center text-center">

        {/* Info Banner */}
        <div className="flex items-center border border-zinc-500 p-2 rounded-xl space-x-2 bg-white bg-opacity-90 backdrop-blur-md">
          <h2 className="text-sm sm:text-base font-normal">
            Introducing: Aggregated Blockchains
          </h2>
          <Image
            src="https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6486fd415a318e62764b3a6c_arrow-right.svg"
            alt="Arrow Right"
            width={20}
            height={20}
            className="bg-blue-600 rounded-full"
          />
        </div>

        {/* Main Heading */}
        <div className="mt-8 max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight">
            Web3,<br />Aggregated.
          </h1>
          <p className="mt-4 text-zinc-500 text-base sm:text-lg">
            Enabling an infinitely scalable web of sovereign blockchains that feels like a single chain. Powered by ZK tech.
          </p>
        </div>

        {/* Decorative Side Arrows */}
        <div className="absolute top-1/3 left-0">
          <Image
            src="https://cdn.prod.website-files.com/637359c81e22b715cec245ad/662741410889f2489acd78d8_left.svg"
            alt="Left Arrow"
            width={170}
            height={120}
            className="translate-y-10"
          />
        </div>

        <div className="absolute top-1/3 right-0">
          <Image
            src="https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6627414178f226ce86b98804_right.svg"
            alt="Right Arrow"
            width={170}
            height={40}
          />
        </div>

      </div>
    </section>
  );
}
