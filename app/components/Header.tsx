'use client'

import Image from 'next/image'
import styles from '@/app/ui/home.module.css'
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const Header = () => {
    const [isVisible, setIsVisible] = useState(true)
    const stickyHeaderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY < 2800)

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isVisible && stickyHeaderRef.current) { // Check both visibility and ref
            gsap.to(stickyHeaderRef.current, { duration: 0.5, y: 0, ease: "power3.inOut" }) // Show header
        } else if (!isVisible && stickyHeaderRef.current) {
            gsap.to(stickyHeaderRef.current, { duration: 0.5, y: -stickyHeaderRef.current.offsetHeight, ease: "power3.inOut" }) // Hide header
        }
    }, [isVisible])


    return (
        <div ref={stickyHeaderRef} className={`h-[340px] pt-[89px] px-[85px]`}>
            <Image src='/chevalme-test/texts/slim.svg' alt='Slim Properties logo' width={142} height={71} className='ml-[-4px]' />
            <nav className='mt-[57px] flex gap-[38px] text-sm'>
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
