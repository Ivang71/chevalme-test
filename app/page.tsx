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
            <footer className={`relative z-[100] h-[477px] bg-cover`} style={{ backgroundImage: 'url("/chevalme-test/images/ft-bg.jpeg")' }}>
                <div className={`${styles.footerTint}`}></div>
                <div className='z-50'>
                    <div>
                        <div className='w-[391px] gotham text-[25px] font-[200] leading-[164%]'>A World of Leading Expertise Exclusively yours</div>
                        <div className='w-[508px] mt-[38px] text-[25px] font-[500] leading-[147%]'>Sign up for our newsletter to stay updated with what’s new in UAE real estate</div>
                        <div>
                            <div className='mt-[19px] text-sm'>Enter your email</div>
                            {/* <input type="email" className='appearance-none' /> */}
                            <div className={`${styles.emailUnderline}`}></div>
                            <button className='py-[10px] px-[36px] bg-[#938270] rounded-[40px]'>Sign Up</button>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
