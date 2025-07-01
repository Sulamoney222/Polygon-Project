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

const Accordion = [
  {
    id:1,
    que: 'For anyone not familiar, what is Polygon zkEVM?',
    ans: `Polygon zkEVM is the leading zero knowledge scaling solution that’s equivalent with the Ethereum Virtual Machine, this means that most of the existing smart contracts, developer tools, and wallets work seamlessly.
     Polygon zkEVM harnesses the power of ZK proofs to reduce transaction cost and increase throughput, all while inheriting the security of Ethereum L1.`
  },
  {
    id:2,
    que: `What are the main features of Polygon zKEVM?`,
    ans: `1- Ethereum-equivalence: Most Ethereum smart contracts, wallets, tools, etc. work on Polygon zkEVM seamlessly.
2- Inherits Ethereum security
3- Lower cost compared to L1 and better finality than other L2 solutions like Optimistic Rollups
4- ZKP-powered scalability, and aiming at similar throughput to PoS`
  },
  {
    id:3,
    que: `wHAT IS SO UNIQUE ABOUT ZKevmS?`,
    ans: `Many people in crypto believed that a zkEVM was years away, and might never be practical or competitive with other ZK L2s. This was framed as an unavoidable tradeoff: we could have either full EVM equivalence or high performance, but not both. However, with the proving system breakthroughs pioneered by Polygon Labs, we belieive we can achieve full EVM equivalence while offering better performance (higher throughput, lower latency, and lower cost) than alt-L1s, optimistic rollups and other ZK rollups.`
  },
  {
    id:4,
    que: `Why is EVM Equivalence needed?`,
    ans: `EVM-equivalent: Ethereum isn’t just a blockchain. It’s a rich ecosystem of smart contracts, developer tools, infrastructure, and wallets. It’s a vibrant community of developers, auditors, and users. The best way to scale Ethereum is to strive to maintain equivalence with this ecosystem, and the Polygon zkEVM will give users and developers an almost identical experience to Ethereum L1 -- just with a significant scalability improvement.`
  },
  {
    id:5,
    que: `What EVM opcodes are different on Polygon zKEVM?`,
    ans: `SELFDESTRUCT: removed by SENDALL
EXTCODEHASH: returns hash contract bytecode from Polygon zkEVM state tree (do not check if the account is empty)
DIFFICULTY: returns 0
BLOCKCHASH: returns all previous block hashes (not just the last 256 blocks)
BLOCKCHASH is the state root at the end of a processable transaction and it is stored on the system smart contract
NUMBER: number of processable transactions`,
  },
  {
    id:6,
    que: `Which opcodes are missing in the current zkEVM version?`,
    ans: `zkEVM supports all opcodes but SHA256, BLAKE and PAIRINGS.`
  },
   {
    id:7,
    que: `Can this layer 2 zkEVM work with other chains?`,
    ans: `At the moment, the answer is No. Aspirationally, the goal in the future is to build one of many chains that allow for users' assets to move from layer 2 (L2) to layer 2. With that being said, users will not be able to utilize this functionality at launch, but L2 to L2 movement is something road mapped for the future.`
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


      <div className="">
        <h1>EVM equivalence and secure scalability</h1>
        <p>
          Polygon zkEVM Beta harnesses the power of ZK proofs to reduce transaction cost and massively increase throughput, all while inheriting the security of Ethereum L1.
        </p>
        <Image
        src= 'https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63b5edddfd604202a584ca9e_ZKEVM.svg' />
      </div>
       <div className="">
        <h2>Polygon zkEVM FAQ</h2>
        <div className="">
          {
            Accordion.map((q)=>{
              const {que, ans} = q
              return(
                <>
                </>
              )
            })
          }
        </div>
        <Link><button>Read More</button></Link>
       </div>
    </section>
    
  )
}

export default Grant
