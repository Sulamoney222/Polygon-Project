import React from 'react'
import { Links } from '@/data'
import Image from 'next/image'

//logo
//https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66273f100889f2489acb2d8e_Polygon%20Logo%20Complete%20White.svg

const Navbar = () => {
  return (
    <div className="flex justify-between md:p-10 max-md:p-5 ">

      <div className="">
      <Image 
      className='w-max '
      width={40}
      height={40}
      src='https://cdn.prod.website-files.com/637359c81e22b715cec245ad/66273f100889f2489acb2d8e_Polygon%20Logo%20Complete%20White.svg'/>
      </div>

      <nav className='flex gap-4 max-md:hidden'>
         {
          Links.map((link)=>{
            const {name,url, id} =link
            return(
              <li key={id} className='list-none'>
                <h2>{name}</h2>
              </li>
            )
          })
         }
      </nav>
    
     <div className="list-none flex gap-4 max-md:hidden">
      <li>Discord Icon</li>
      <li>Twitter icon</li>
      <button className="p-2 leading-tight rounded font-bold bg-blue-600 text-sm">
        Polygon Docs</button>
     </div>

      <button className='md:hidden'>Toggle</button>

    </div>
  )
}

export default Navbar
