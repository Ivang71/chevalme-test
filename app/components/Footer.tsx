import Image from 'next/image'
import styles from '@/app/ui/home.module.css'

export const Footer = () => {
    return (

        <footer className={`relative z-[100] min-[1440px]-h-[477px] bg-cover`} style={{ backgroundImage: 'url("/chevalme-test/images/ft-bg.jpeg")' }}>
            <div className={`${styles.footerTint}`}></div>
            <div className='z-50 px-[3vw] sm:px-[80px] pt-[91px] flex flex-wrap gap-y-10 gap-x-1'>
                <div className='max-w-full'>
                    <div className='sm:w-[391px] gotham text-[25px] font-[200] leading-[164%]'>A World of Leading Expertise Exclusively yours</div>
                    <div className='sm:w-[508px] mt-[38px] text-[25px] font-[500] leading-[147%]'>Sign up for our newsletter to stay updated with what’s new in UAE real estate</div>
                    <div>
                        <div className='mt-[19px] text-sm'>Enter your email</div>
                        {/* <input type="email" className='appearance-none' /> */}
                        <div className='mt-[-15px] flex gap-1 items-end'>
                            <div className={`${styles.emailUnderline}`}></div>
                            <button className='py-[16px] px-[35px] bg-[#938270] rounded-[40px] text-sm'>Sign&nbsp;Up</button>
                        </div>
                    </div>
                </div>
                <div className='sm:ml-[67px] text-sm'>
                    <div className='font-[700]'>Explore Residential in</div>
                    <div className='mt-[7px]'>Palm Jumeirah</div>
                    <div className='mt-[6px]'>Jumeirah Beach Residence</div>
                    <div className='mt-[6px]'>Dubai Marina</div>
                    <div className='mt-[6px]'>Downtown Dubai</div>
                    <div className='mt-[6px]'>Business Bay</div>
                    <div className='mt-[6px]'>Dubai Hills</div>
                    <div className='mt-[6px]'>City Walk</div>
                </div>
                <div className='sm:ml-[67px] text-sm'>
                    <div className='font-[700]'>Slim Property</div>
                    <div className='mt-[7px]'>About us</div>
                    <div className='mt-[6px]'>Services</div>
                    <div className='mt-[6px]'>Investment</div>
                    <div className='mt-[6px]'>Sell your property</div>
                    <div className='mt-[6px]'>Careers</div>
                    <div className='mt-[6px]'>Blogs & news</div>
                    <div className='mt-[6px]'>Contact us</div>
                </div>
                <div className='sm:ml-[78px] w-[252px] text-sm'>
                    <Image src='/chevalme-test/texts/slim.svg' alt='Slim Properties logo' width={142} height={71} className='ml-[-4px]' />
                    <div className='mt-[53px]'>Office 304, Bay Square 11, Business Bay, Dubai, UAE</div>
                    <div className='mt-[6px]'>Ph: +971 04 111 1111</div>
                    <div className='mt-[6px]'>Email: info@example.com</div>
                    <div className='mt-[13px] flex'>
                        <Image src='/chevalme-test/icons/fb.svg' alt='Facebook icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' />
                        <Image src='/chevalme-test/icons/x.svg' alt='X icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' />
                        <Image src='/chevalme-test/icons/instagram.svg' alt='Instagram icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' />
                        <Image src='/chevalme-test/icons/linkedin.svg' alt='Linkedin icon' width={13} height={13} className='w-[13px] h-[13px]' />
                    </div>
                </div>
            </div>
            <div className={`${styles.footerLine} mt-[40px]`}></div>
            <div className='mt-[26px] ml-[3vw] pb-12 sm:ml-[80px] w-[calc(100%-3vw)] sm:w-[calc(100%-160px)] flex justify-between gap-5 text-sm'>
                <div className={styles.designedBy}>Designed & Developed by Cheval</div>
                <div className={styles.copyright}>© 2024 Slim Properties. All rights reserved</div>
            </div>
        </footer>
    )
}
