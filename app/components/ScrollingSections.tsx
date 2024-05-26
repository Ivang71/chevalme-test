'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { HomeHero, FeaturedProperties, OurServices, Instagram, Footer } from '@/app/components'
import '@/app/ui/t.css'


if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export const ScrollingSections = () => {
    const horizontalSection = useRef(null)

    useGSAP(
        () => {
            const slides = gsap.utils.toArray('.horizontalPanel')
            gsap.to(slides, {
                xPercent: -100 * (slides.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: horizontalSection.current,
                    pin: true,
                    start: 'bottom bottom',
                    //   snap: 1 / (slides.length - 1),
                    end: '+=300%',
                    scrub: 0.8,
                },
            })
        },
        {
            scope: horizontalSection,
        }
    )

    return (
        <>
            <div className="horizontalSection section h-[calc(100vh-340px)]" ref={horizontalSection}>
                <HomeHero />
                <FeaturedProperties />
                <OurServices />
                <Instagram />
            </div>
        </>
    )
}
