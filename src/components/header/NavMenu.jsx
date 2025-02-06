import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavMenu = () => {
  return (
      <div className='flex flex-col md:flex-row items-center gap-4 md:gap-10 '>
          <Link href="/docs" className="bg-transparent flex items-center gap-1 group ">
              <span>For Companies</span> <ChevronDown size={13} className="group-hover:rotate-180 duration-300 " />
          </Link>
          <Link href="/docs" className="bg-transparent flex items-center gap-1 group ">
              <span>For Talents</span> <ChevronDown size={13} className="group-hover:rotate-180 duration-300 " />
          </Link>
          <Link href="/docs" className="bg-transparent flex items-center gap-1 group ">
              <span>Our Products</span> <ChevronDown size={13} className="group-hover:rotate-180 duration-300 " />
          </Link>
    </div>
  )
}

export default NavMenu