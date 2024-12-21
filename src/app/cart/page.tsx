import React from 'react'
import WebsiteBanner from '@/components/WebBanner'
import Button from '@/components/Button'
import Link from 'next/link'
import Image from 'next/image' 
import Gurantees from '@/components/Gurantee'

const Page = () => {
  return (
    <div className='overflow-x-hidden'>
        <WebsiteBanner title={'Cart'} />
        <div className='cp md:flex justify-between gap-4 py-[3rem]'>
            <div className='md:w-[68%] w-full flex md:flex-col items-center justify-between'>
                <ul className='py-5 flex md:flex-row flex-col items-center px-4 gap-[3rem] md:justify-center justify-start bg-[#FFF9E5]'>
                    {
                        ['Product', 'Price', 'Quantity', 'Subtotal'].map((value, index) => (
                            <li className={`font-medium text-sm sm:text-[1.1em] md:text-[1.3rem]`} key={index}>{value}</li>
                        ))
                    }
                </ul>

                <br className='md:block hidden' />
                <div className='mt-[-3rem] md:mt-0 flex md:flex-row flex-col items-center px-2 gap-[3rem] md:justify-center justify-start'>
                    <div className='bg-[#FBEBB5]'>
                        <Image src="/images/AsgardSofa.png" alt="Asgard Sofa" width={128} height={128} className='hidden md:block object-cover' />
                    </div>
                    {
                        ['Asgaard Sofa', 'Rs. 250,000.00', '1', 'Rs. 250,000.00'].map((item, index) => (
                            <p className={`${index <= 1 && 'text-[#9F9F9F]'} ${index === 2 && 'px-3 rounded-md py-1 border border-gray-300'} ${index === 3 && 'md:mx-[1rem]'} text-sm sm:text-[1em] md:text-lg`} key={index}>{item}</p>
                        ))
                    }
                    <Image src="/images/delete.png" alt="Delete Icon" width={32} height={32} className='hidden md:block object-cover' />
                </div>
            </div>
            
            <br className='block md:hidden' />
            
            <section className='md:w-[30%] w-full bg-[#FBEBB5] rounded-lg py-[.6em] md:py-[1.5rem] flex flex-col items-center gap-[4px] px-[.8rem] md:px-[1.7rem]'>
                <h1 className='text-[1.4em] md:text-[1.7em] lg:text-[2em] font-medium tracking-wide'>Cart Totals</h1>
                <br />
                <div className='flex justify-between w-full'>
                    <span className='text-[1.1em] md:text-[1em]'>SubTotal</span>
                    <span className='text-[#9F9F9F] text-[1.2em] md:text-[1em]'>Rs.250,000<span className='inline lg:inline md:hidden'>.000</span></span>
                </div>
                <div className='flex justify-between w-full'>
                    <span className='text-[1.1em] md:text-[.9em]'>Total</span>
                    <span className='text-[#B88E2F] text-[1.1em] md:text-[1.15em]'>Rs.250,000<span className='inline lg:inline md:hidden'>.000</span></span>
                </div>
                <br />
                <Link href='/CheckOut'>
                    <Button title={'Check it out'} btnClass={'text-[1em] px-[.6rem] lg:px-[2em] md:px-[1rem] md:py-[1rem] py-2 border border-black rounded-lg md:text-xl font-medium '} />
                </Link>
            </section>
        </div>
        <Gurantees />
    </div>
  )
}

export default Page;
