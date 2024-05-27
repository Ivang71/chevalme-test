'use client'

import Image from 'next/image'
import styles from '@/app/ui/home.module.css'

const Header = () => {
    return (
        <div className={`mb-[50px] sm:mb-0 px-[3vw] sm:px-[85px] h-fit sm:h-[340px] pt-[89px]`}>
            <Image src='/chevalme-test/texts/slim.svg' alt='Slim Properties logo' width={142} height={71} className='ml-[-4px]' />
            <nav className='mt-[57px] flex flex-wrap gap-[38px] text-sm'>
                <div className={styles.navActive}>Home</div>
                <div>About</div>
                <div>Properties</div>
                <div>Services</div>
                <div>Contact</div>
            </nav>
        </div>
    )
}

export default Header
