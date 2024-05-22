import Image from 'next/image'
import '@/app/ui/index.css'
import styles from '@/app/ui/home.module.css'
import Header from "@/app/components/Header"
import ScrollingSections from "@/app/components/ScrollingSections"
import Footer from '@/app/components/Footer'

export default async function Page() {
    return (
        <div className='text-[#eddfd0] helveticaNeue'>
            <Header/>
            <Image src='/chevalme-test/images/bg.jpeg' alt='Background' width={1934} height={1154} className='z-[-50] fixed top-0 w-full h-full' />
            <ScrollingSections />
            <Footer />
        </div>
    )
}
