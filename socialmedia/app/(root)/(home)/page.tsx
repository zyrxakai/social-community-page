import SocialMediaList from '@/components/SocialMediaList'
import React from 'react'

const Home = () => {
  return (
    <section className='flex size-full flex-col gap-10
    text-white'>
      <div className='h-[300px] w-full rounded-[20px]
      bg-hero bg-cover'>
        <div className='flex h-full flex-col
        justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='text-3xl font-extrabold
            lg:text-4xl mt-20'>Social Commumity</h2>
          <div className='flex flex-col gap-2'>
          </div>
        </div>
      </div>
      <SocialMediaList />
    </section>
  )
}

export default Home