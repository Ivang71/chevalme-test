import Image from 'next/image'
import '@/app/ui/index.css'
import s from '@/app/ui/main.module.css'

export const HomeHero = () => {
    return (
        <div className="min-[1630px]:min-w-[1440px] max-[1629px]:w-full">
            <div className='gotham text-[50px] sm:text-[85px] leading-[88px] font-[700]'>
                <div>Timeless</div>
                <div>luxury</div>
                <div>re-imagined</div>
                <div className='z-[-30] absolute top-[50%] right-0 translate-y-[-25%] sm:translate-y-[-15%] lg:translate-y-[-30%] pointer-events-none'>
                    <Image src='/slim-properties/images/car-home.webp' alt='Home and a car' width={1404} height={885} />
                    <Image src='/slim-properties/images/cloud1.webp' alt='Cloud one' width={623} height={352}
                        className={`${s.cloud1} z-[-50] absolute top-[10%] right-0 max-w-[50%]`} />
                    <Image src='/slim-properties/images/cloud2.webp' alt='Cloud two' width={513} height={267}
                        className={`${s.cloud2} z-[-50] absolute top-[30%] right-0 max-w-[50%]`} />
                </div>
            </div>
            <div className='mt-[136px] text-sm'>
                <span className={`${s.projects} ${s.projActive} mr-[89px]`}>Ready</span>
                <span className={`${s.projects}`}>New Projects</span>
            </div>
            <div className='mt-[15px] ml-[-13px] flex flex-wrap text-sm'>
                <button className='py-3 pl-2 grid place-items-center grid-cols-2 gap-1 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                    Buy
                    <Image src='/slim-properties/icons/expand_more.svg' alt='Arrow down' width={32} height={32} className='ml-[-10px] mr-[12px]' />
                </button>
                <button className='mr-[11px] p-3 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>Community or Building</button>
                <div className={`${s.line}`} />
                <button className='mx-[16px] p-3 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>Location</button>
                <div className={`${s.line}`} />
                <button className='mx-[18px] p-3 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>Price</button>
                <div className={`${s.line}`} />
                <button className='ml-3 py-3 pl-2 grid place-items-center grid-cols-2 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                    Search
                    <Image src='/slim-properties/icons/search.svg' alt='Search icon' width={17} height={17} className='ml-[-20px]' />
                </button>
            </div>
        </div>
    )
}