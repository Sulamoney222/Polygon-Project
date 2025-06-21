import React from 'react'

const rewards = [
  {  
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63ad10a4f5bff05b8a610e9d_value-card-guild2.avif',
     head: 'Earn Rewards',
     body: '12% of the total supply of 10 billion POL is allocated to fund staking rewards. As a validator, you set your own commission for accepting delegations to your node. There are also annual incentives available!',
  },

  {  
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63ad10a484f78541b4d87e79_value-card-guild1.avif',
     head: 'Build the future',
     body: 'You do not need to use energy-intensive computers to stake, which lessens the environmental impact. Each node consumes only 546.07 kWh per year.',
  },
  {  
    img: 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63ad10a484f78541b4d87e79_value-card-guild1.avif',
     head: 'Stake Sustainably',
     body: 'Polygon PoS is one of the most used protocols in the world and continues to grow. By staking, you can help to build the technology of Web3.',
  }

]

const stake = [
  {
    id:1,
    head:'Becoma A Delegator',
    vid: 'https://polytech-assets.polygon.technology/videos/staking/Validator.mp4',
    body: 'Validators verify transactions and add new blocks on the blockchain. In return, they earn rewards. Validator nodes are units on the Polygon blockchain that participate in consensus group work and commit checkpoints on the Ethereum Mainnet.',
  },
  {
    id:2,
    head: 'Become A Delegator',
    vid:'https://polytech-assets.polygon.technology/videos/staking/delegator.mp4',
    body: 'Participate as a delegator to earn rewards and contribute to network secuity. Delegate staking tokens to a validator of your choice and share risks and rewards'
  }
]

const Stake = () => {
  return (
   <section className=" mx-auto items-center max-w-7xl">
   <div className="">
    
    <h2>
      <video src=""></video>
      <div className="">
        <h2> Earn rewards while securing the Polygon PoS network</h2>
        <p>Anyone can use POL tokens to help safeguard the network and earn rewards</p>
        <button className="">Becoma A Delegator</button>
      </div>
    </h2>
   </div>

   <div className="">
    <h2>Why stake on Polygon?</h2>
    <div className="">
      {/* insert rewards array here, and pls make it scroll horizontally on mobile device responsive */}
    </div>
   </div>

    <div className="">
      <div className="border border-stone-600">
        <h1>4.95% CRP</h1>
        <p>CURRENT REWARD PERCENTAGE</p>
      </div>

      <div className="">
        <h1>How to stake?</h1>
        <p>Polygon PoS chain is run on the Proof of Stake mechanism. Anyone can seek to become a validator on the mainnet.Check how much reward you can earn with your POL</p>
       <div className="">
        {/* insert the stake array here, pls make it have an hover effects */}
       </div>
      </div>

      <div className="">
        <h1>Validator Performane Metric</h1>
        <p>Validator Performance Metric helps in self-regulating network participation to an agreed set of parameters through:</p>
       <article>
        {/* bullet this part pls*/}
        Setting up a Performance Benchmark for a measurement period
Identifying healthy and under performing validators
Initiating communication with under performing validators for remedy
Showcasing validators' performances regularly
Initiating off-boarding of unhealthy validators from the network
       </article>
      </div>

       <div className="">
        <h2>Frequently Asked Questions</h2>
        <div className="">
          {/* Help me suggest some 10 related questions and create accordion for them and pls add some smooth and animate scroll when clicking on unique accordion*/}
        </div>
       </div>
    </div>

   </section>
  )
}

export default Stake

