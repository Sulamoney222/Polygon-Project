import React from 'react'

//https://polytech-assets.polygon.technology/videos/plonky/hero_plonky-new.mp4


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
    </section>
  )
}

export default Blog
