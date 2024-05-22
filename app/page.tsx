import Image from 'next/image'
import '@/app/ui/index.css'
import styles from '@/app/ui/home.module.css'
import ScrollingSections from "@/app/components/ScrollingSections"

export default async function Page() {
    return (
        <div className='text-[#eddfd0] helveticaNeue'>
            <div className={`h-[340px] sticky top-0 pt-[89px] px-[85px]`}>
                <Image src='/chevalme-test/texts/slim.svg' alt='Slim Properties logo' width={142} height={71} className='ml-[-4px]' />
                <nav className='mt-[57px] flex gap-[38px] text-sm'>
                    <div className={styles.navActive}>Home</div>
                    <div>About</div>
                    <div>Properties</div>
                    <div>Services</div>
                    <div>Contact</div>
                </nav>
            </div>
            <Image src='/chevalme-test/images/bg.jpeg' alt='Background' width={1934} height={1154} className='z-[-50] fixed top-0 w-full h-full' />
            <ScrollingSections />
            <footer className='z-[100] relative h-[609px]' style={{ backgroundImage: 'url("/chevalme-test/images/ft-bg.jpeg")' }}></footer>
        </div>
    )
}
