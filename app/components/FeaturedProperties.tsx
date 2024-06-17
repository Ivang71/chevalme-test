'use client'

import Image from 'next/image'
import '@/app/ui/index.css'
import { PropertyCard } from '@/app/components'
import Link from 'next/link'
import s from '@/app/ui/main.module.css'
import { useState, useLayoutEffect } from 'react'


export const FeaturedProperties = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const [propType, setPropType] = useState<'villas' | 'apartments' | 'all'>('villas')
    const [action, setAction] = useState<'rent' | 'buy' | 'sell'>('buy')

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 640)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="">
            <div className='flex flex-wrap gap-8'>
                <div className='gotham text-[40px] sm:text-[69px] leading-[94%] font-[700]'>
                    <div>Featured</div>
                    <div>Properties</div>
                </div>
                {isLargeScreen ? (
                    <div className='text-[12px] mt-0 sm:mt-[39px] flex-wrap'>
                        <div className='flex'>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${propType === 'villas'? 'border-b-[3px]': 'border-b'}`} onClick={() => setPropType('villas')}>Villas</div>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${propType === 'apartments'? 'border-b-[3px]': 'border-b'}`} onClick={() => setPropType('apartments')}>Apartments</div>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${propType === 'all'? 'border-b-[3px]': 'border-b'}`} onClick={() => setPropType('all')}>View All</div>
                        </div>
                        <div className='flex mt-[17px]'>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${action === 'rent'? 'border-b-[3px]': 'border-b'}`} onClick={() => setAction('rent')}>Rent</div>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${action === 'buy'? 'border-b-[3px]': 'border-b'}`} onClick={() => setAction('buy')}>Buy</div>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${action === 'sell'? 'border-b-[3px]': 'border-b'}`} onClick={() => setAction('sell')}>Sell</div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='w-full text-center flex text-sm'>
                            <div className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] border-b-[3px] border-solid border-[#eddfd0] ${s.hoverable}`}>Villas</div>
                            <div className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] border-b border-solid border-[#eddfd0] ${s.hoverable}`}>Apartments</div>
                            <div className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] border-b border-solid border-[#eddfd0] ${s.hoverable}`}>View All</div>
                        </div>
                        <div className='w-full text-center flex text-sm'>
                            <div className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] border-b border-solid border-[#eddfd0] ${s.hoverable}`}>Rent</div>
                            <div className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] border-b-[3px] border-solid border-[#eddfd0] ${s.hoverable}`}>Buy</div>
                            <div className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] border-b border-solid border-[#eddfd0] ${s.hoverable}`}>Sell</div>
                        </div>
                    </>
                )}
            </div>
            <div className='flex flex-wrap'>
                <PropertyCard
                    id={12}
                    imageUrl='/slim-properties/images/property.jpg'
                    altText='Photo of a property'
                    title='Canal View Villa'
                    location='Vezul Residence, Business Bay.'
                    bedrooms={2}
                    bathrooms='2'
                    area='1,273 sqft'
                    price={1560}
                />
                <PropertyCard
                    id={12}
                    imageUrl='/slim-properties/images/property.jpg'
                    altText='Photo of a property'
                    title='Canal View Villa'
                    location='Vezul Residence, Business Bay.'
                    bedrooms={2}
                    bathrooms='2'
                    area='1,273 sqft'
                    price={1560}
                />
                <PropertyCard
                    id={12}
                    imageUrl='/slim-properties/images/property.jpg'
                    altText='Photo of a property'
                    title='Canal View Villa'
                    location='Vezul Residence, Business Bay.'
                    bedrooms={2}
                    bathrooms='2'
                    area='1,273 sqft'
                    price={1560}
                />
                {isLargeScreen ? (
                    <div className='mt-[43px] w-full sm:w-[304px]'>
                        <div className={`${s.lastProperty}`}>
                            <Image src='/slim-properties/images/property.jpg' alt='Photo of a property' width={304} height={293} className='max-[639px]:w-full' />
                            <Link href='/projects/ready'>
                                <div className={`${s.backdrop} text-[14px]`}>Explore All</div>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <button className='mt-[26px] mx-auto px-[30px] py-[8px] w-[114px] rounded-3xl bg-[#EDDFD0] hover:bg-white/30 text-[#916940] text-sm
                        active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                        View&nbsp;All
                    </button>
                )}
            </div>
        </div>
    )
}