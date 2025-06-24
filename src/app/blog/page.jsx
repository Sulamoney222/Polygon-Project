import Image from 'next/image'
import React from 'react'

//https://polytech-assets.polygon.technology/videos/plonky/hero_plonky-new.mp4

const items = [
  {
    id:1,
    head:'Enhanced Performance',
    img:'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66964105e8e7ef1d860f124e_newdrawer.avif',
    body: 'Polygon Plonky3 will further reduce proof generation times, making it even faster than Plonky2. This enhancement will enable more complex and frequent transactions to be verified quickly',
  },
  {
    id:2,
    head: 'Improved Scalability',
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66964105efde9777522eb138_filter.avif',
    body: 'With Polygon Plonky3, the aim is to handle even larger datasets and more complex computations efficiently. This will further reduce the computational overhead and costs associated with proof generation and verification',
  },
  {
    id:3,
    head: 'Advanced Recursion',
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66964105157d3fd02b945f30_cc.avif',
    body: 'Polygon Plonky3 will support even more efficient recursive proofs, allowing for deeper nesting without performance loss. This will be particularly beneficial for applications requiring multi-layered proofs'
  },
   {
    id:4,
    head: 'Modularity',
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66964105bb5956ed66fb248a_co.avif',
    body: 'At a high-level, Polygon Plonky3 is modular across finite field and hash functions. In practice, ZK devs can mix and match to build a zkVM or zkEVM that best fits the blockchain application'
  }
]

const Blog = () => {
  return (
    <section className="">
      <div className="">
        <video 
        playsInline
        loop
        muted
        autoPlay>
          <source src="https://polytech-assets.polygon.technology/videos/plonky/hero_plonky-new.mp4" type="" />
        </video>
        <h1>Polygon Plonky3 enables you to build modern zk-rollups</h1>
        <p>Lightning ffff fast and modular, Polygon Plonky3 is a build-your-own adventure of ZK proving systems. Build new zkVMs or zkEVMs that crackle with a prover customized for specific use cases</p>
      </div>

      <div className="">
        <Image
        src='https://cdn.prod.website-files.com/637359c81e22b715cec245ad/6683a91f54418aca7d0ca1c2_why-plonkey%20(1).png'
        />

        <h1>Why is Polygon Plonky3 important?</h1>
        <p>Unlimited scale, securely. Polygon Plonky3 is a modular proving system, which lets devs build and design fast, efficient zkVMs and zkEVMs. Polygon Plonky3 can optimize for speed when speed matters, for small proofs when size matters, and a range of implementations in between. Because Polygon Plonky3 is open-source, its libraries will grow alongside the mathematical innovations occurring in the field</p>
       <h1>What is Polygon Plonky3?</h1>
        <p>In ZK scaling tech, the proving system is the mathematical framework that ensures cryptographic security. Where most proving systems are optimized for certain blockchain operations, Polygon Plonky3 is designed for flexibility,  enabling ZK devs to build high-performance zkVMs and zkEVMs to a targeted use case</p>
      </div>

   <div className="">
       <div className="border border-stone-400 bg-stone-800">
      {
        items.map((item)=>{
          const {head, id, body, img} =item
          return(
            <div className=""key={id}>
              <Image src={img}/>
              <h2>{head}</h2>
              <p>{body}</p>
            </div>
          )
        })
      }
      </div>
   </div>

    



    </section>
  )
}

export default Blog
