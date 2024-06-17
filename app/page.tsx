import '@/app/ui/index.css'
import Image from 'next/image'
import { HomeHero, FeaturedProperties, OurServices, Instagram } from '@/app/components'

export default async function Page() {
    return (
        <div className='mb-[64px] sm:mb-[200px] flex flex-col items-center gap-[59px] sm:gap-[160px]'>
            <Image src='/slim-properties/icons/whatsapp.svg' alt='Whatsapp icon' width={50} height={50}
                className='fixed right-[4vw] bottom-[9vh] p-1 rounded-full hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out' />            <HomeHero />
            <div className='px-[3vw] sm:px-[85px] flex flex-col items-center'>
                <FeaturedProperties />
                <div className='max-[639px]:mt-[46px] mt-[86px]'>
                    <OurServices />
                </div>
                <div className='max-[639px]:mt-[64px] mt-[86px]'>
                    <Instagram />
                </div>
            </div>
        </div>
    )
}
