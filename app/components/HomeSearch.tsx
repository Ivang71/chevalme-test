'use client'

import '@/app/ui/index.css'
import Image from 'next/image'
import s from '@/app/ui/main.module.css'
import { useState, useLayoutEffect } from 'react'


export const HomeSearch = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 640)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isLargeScreen ? (
        <>
            <div className='px-[3vw] sm:px-[85px] max-[639px]:mx-[3vw] mt-[400px] xl:mt-[200px] max-[639px]:w-full max-[639px]:text-center flex text-sm'>
                <div className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] border-b-[3px] border-solid border-[#eddfd0] ${s.hoverable}`}>Ready</div>
                <div className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] border-b border-solid border-[#eddfd0] ${s.hoverable}`}>New Projects</div>
            </div>
            <div className='mt-[15px] ml-[-13px] px-[3vw] sm:px-[85px]  flex flex-wrap text-sm'>
                <button className={`py-3 pl-2 grid place-items-center grid-cols-2 gap-1 rounded-3xl ${s.hoverable}`}>
                    Buy
                    <Image src='/slim-properties/icons/expand_more.svg' alt='Arrow down' width={32} height={32} className='ml-[-10px] mr-[12px]' />
                </button>
                <button className={`mr-[11px] p-3 rounded-3xl ${s.hoverable}`}>Community or Building</button>
                <div className={`${s.line}`} />
                <button className={`mx-[16px] p-3 rounded-3xl ${s.hoverable}`}>Location</button>
                <div className={`${s.line}`} />
                <button className={`mx-[18px] p-3 rounded-3xl ${s.hoverable}`}>Price</button>
                <div className={`${s.line}`} />
                <button className={`py-3 pl-2 grid place-items-center grid-cols-2 gap-1 rounded-3xl ${s.hoverable}`}>
                    Search
                    <Image src='/slim-properties/icons/search.svg' alt='Search icon' width={17} height={17} className='ml-[-20px]' />
                </button>
            </div>
        </>
    ) : (
        <>
            <div className='px-[3vw] mt-[300px] xl:mt-[200px] w-full text-center flex text-sm'>
                <div className={`flex-1 pb-[8px] min-w-[132px] border-b-[3px] border-solid border-[#eddfd0]`}>Ready</div>
                <div className={`flex-1 pb-[8px] min-w-[132px] border-b border-solid border-[#eddfd0]`}>New Projects</div>
            </div>
            <div className='mt-[15px] px-[3vw] flex flex-col text-sm'>
                <button className='py-4 flex justify-between grid-cols-2 gap-1 hover:bg-white/30 active:bg-white/60 hover:text-gray-700
                    border-b border-solid border-[#eddfd0] border-opacity-60 active:text-black transition duration-200 ease-in-out'>
                    Buy
                    <Image src='/slim-properties/icons/expand_more.svg' alt='Arrow down' width={29} height={29} className='mt-[-5px]' />
                </button>
                <button className='pt-[24px] pb-[15px] flex hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out
                    border-b border-solid border-[#eddfd0] border-opacity-60'>Community or Building</button>
                <button className='pt-[24px] pb-[15px] flex justify-between grid-cols-2 gap-1 hover:bg-white/30 active:bg-white/60 hover:text-gray-700
                        border-b border-solid border-[#eddfd0] border-opacity-60 active:text-black transition duration-200 ease-in-out'>
                    Location
                    <Image src='/slim-properties/icons/location_round.svg' alt='Location' width={24} height={24} className='mt-[-5px] mr-[5px]' />
                </button>
                <button className='pt-[24px] pb-[15px] flex hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out
                    border-b border-solid border-[#eddfd0] border-opacity-60'>Price</button>
                <button className='mt-[26px] mx-auto px-[30px] py-[10px] w-[114px] flex gap-1 rounded-3xl bg-[#EDDFD0] hover:bg-white/30 text-[#916940]
                    active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                    Search
                    <Image src='/slim-properties/icons/search_brown.svg' alt='Search icon' width={13} height={13} className='mt-[2px]'/>
                </button>
            </div>
        </>
    )
}
