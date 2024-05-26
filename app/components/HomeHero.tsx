import Image from 'next/image'
import s from '@/app/ui/scrollSection.module.css'
import '@/app/ui/t.css'

export const HomeHero = () => {
    return (
        <div className="horizontalPanel pl-[85px] relative w-full">
            <div className='gotham text-[85px] leading-[88px]'>
                <div>Timeless</div>
                <div>luxury</div>
                <div>re-imagined</div>
            </div>
            <Image src='/chevalme-test/images/car-home.png' alt='Home and a car' width={1404} height={885} className='absolute top-[-320px] left-[47px] pointer-events-none' />
            <div className='mt-[136px] text-sm'>
                <span className={`${s.projects} ${s.projActive} mr-[89px]`}>Ready</span>
                <span className={`${s.projects}`}>New Projects</span>
            </div>
            <div className='mt-[15px] ml-[-13px] flex text-sm'>
                <button className='py-3 pl-2 grid place-items-center grid-cols-2 gap-1 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                    Buy
                    <Image src='/chevalme-test/icons/expand_more.svg' alt='Arrow down' width={32} height={32} className='ml-[-10px] mr-[12px]' />
                </button>
                <button className='mr-[11px] p-3 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>Community or Building</button>
                <div className={`${s.line}`} />
                <button className='mx-[16px] p-3 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>Location</button>
                <div className={`${s.line}`} />
                <button className='mx-[18px] p-3 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>Price</button>
                <div className={`${s.line}`} />
                <button className='ml-3 py-3 pl-2 grid place-items-center grid-cols-2 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                    Search
                    <Image src='/chevalme-test/icons/search.svg' alt='Search icon' width={17} height={17} className='ml-[-20px]' />
                </button>
            </div>
        </div>
    )
}