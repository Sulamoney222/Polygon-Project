import Link from 'next/link'
import React from 'react'


const performance= [
  {
    id:1,
    head: 'Low cost',
    bpdy:{
      m1: 'Polygon zKEVM harnesses the power of ZK proofs to reduce transaction cost',
      m2: 'zkSNARK footprint size in L1 for user cost optimization',
      m3: 'Lowers total cost of usage for end users for a better user experience',
    }
  },
   {
    id:2,
    head: 'High peformance',
    bpdy:{
      m1: 'Fast network finality with frequent validity proofs',
      m2: 'Use of Polygon Zero technology, the fastest ZK proof in the world',
      m3: 'Developers can create different types of dApps for a variety of user experiences',
    }
  },
  {
    id:3,
    head: 'EVM equivalence',
    bpdy:{
      m1: 'Deployment onto EVM without changes in code',
      m2: 'The vast majority of existing smart contracts, developer tools and wallets work seamlessly.',
      m3: 'Allows developers to focus on improving code rather than re-writing it',
    }
  },
  {
    id:4,
    head: 'Security',
    bpdy:{
      m1: 'Ethereum security inherited in L2 with the additional benefit of L2 batching for scaling',
      m2: 'ZK proofs ensure transaction validity and safeguards user funds',
      m3: 'Assurance that information stored cannot be changed or corrupted',
    }
  },
 
]

const Grant = () => {
  return (
    <section className="">
      <div className="">
       <video 
       muted
       autoPlay
       playsInline
       src="">
        
       </video>
      <h1>Bring Etherum to <strong>everyone</strong></h1>
      <p> Polygon zkEVM Beta is the leading ZK scaling solution that is equivalent to Etherum Virtual 
        Machine: The vast majority of existing smart contracts, developer tools and wallets work seamlessly </p>
      <button className='bg-white text-black'>
        <Link href='/' >Get In Touch</Link>
      </button>
      </div>

      <div className="">
        <h1>Etherum bb scalability with zkEVM performance and security</h1>
        
        <div className="">
          {
            performance.map((p)=>{
                  const {id,head,bqdy} = p
                  return (
                    <>
                    </>
                  )
            })
          }
        </div>
      </div>
    </section>
    
  )
}

export default Grant
