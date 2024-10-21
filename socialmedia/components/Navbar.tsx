import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full
    bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-1'>
      <Image 
      src="/icons/jsplogo.png"
      width={32}
      height={32}
      alt='logo'
      className='max-sm:size-10'
      />
      </Link>
      <div className='flex-between gap-5'>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar