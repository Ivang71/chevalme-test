import Image from 'next/image'
import styles from '@/app/ui/home.module.css'

export default async function Page() {
    return (
        <div className={`h-screen pt-[89px] px-[85px] text-[#eddfd0] helveticaNeue`} style={{ backgroundImage: 'url("/chevalme-test/images/bg.jpeg")' }}>
            <Image src='/chevalme-test/texts/slim.svg' alt='Softgamings logo' width={142} height={71} className='ml-[-4px]' />
            <nav className='mt-[57px] flex gap-[38px] text-sm'>
                <div className={`${styles.navActive}`}>Home</div>
                <div>About</div>
                <div>Properties</div>
                <div>Services</div>
                <div>Contact</div>
            </nav>

            <main className='h-screen'>
                <div className='mt-[88px] gotham text-[85px] leading-[88px]'>
                    <div>Timeless</div>
                    <div>luxury</div>
                    <div>re-imagined</div>
                </div>
                <Image src='/chevalme-test/images/car-home.png' alt='Softgamings logo' width={1404} height={885} className='absolute top-0 left-[21px]' />
                <div className='mt-[136px] text-sm'>
                    <span className={`${styles.projects} ${styles.projActive} mr-[77px]`}>Ready</span>
                    <span className={`${styles.projects}`}>New Projects</span>
                </div>
                <div className='mt-[28px] flex text-sm'>
                    <div>Buy</div>
                    <Image src='/chevalme-test/icons/expand_more.svg' alt='Softgamings logo' width={32} height={32} className='mr-[20px] mt-[-2px]' />
                    <div className='mr-[18px]'>Community or Building</div>
                    <div className={`${styles.line}`}/>
                    <div className='mx-[24px]'>Location</div>
                    <div className={`${styles.line}`}/>
                    <div className='mx-[26px]'>Price</div>
                    <div className={`${styles.line}`}/>
                    <div className='ml-[27px] mr-[4px]'>Search</div>
                    <Image src='/chevalme-test/icons/search.svg' alt='Softgamings logo' width={17} height={17} className='mr-[20px] mt-[-4px]' />
                </div>
            </main>


            <Image src='/chevalme-test/logos/whatsapp.svg' alt='Softgamings logo' width={44} height={44} className='fixed bottom-[58px] right-[64px]' />


            <footer className='h-[609px]' style={{ backgroundImage: 'url("/chevalme-test/images/ft-bg.jpeg")' }}>

            </footer>
        </div>
    )
}
