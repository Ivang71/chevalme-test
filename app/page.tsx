import Image from 'next/image'
import '@/app/ui/index.css'
import styles from '@/app/ui/home.module.css'
import Header from "@/app/components/Header"
import { HomeHero, FeaturedProperties, OurServices, Instagram, Footer } from '@/app/components'

export default async function Page() {
    return (
        <div className='text-[#eddfd0] helveticaNeue'>
            <Header />
            <Image src='/chevalme-test/images/bg.jpeg' alt='Background' width={1934} height={1154} className='z-[-50] fixed top-0 w-full h-full' />
            <div className='mb-[200px] px-[3vw] sm:px-[85px] flex flex-col items-center gap-[200px]'>
                <HomeHero />
                <FeaturedProperties />
                <OurServices />
                <Instagram />
            </div>
            <Footer />
        </div>
    )
}
