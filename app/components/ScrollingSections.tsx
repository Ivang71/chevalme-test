'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import s from '@/app/ui/scrollSection.module.css'
import '@/app/ui/t.css'


if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const ScrollingSections = () => {
    const horizontalSection = useRef(null)

    useGSAP(
        () => {
            const slides = gsap.utils.toArray('.horizontalPanel')
            gsap.to(slides, {
                xPercent: -100* (slides.length - 1),
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

                <div className="horizontalPanel pl-[85px] relative w-full">
                    <div className='gotham text-[85px] leading-[88px]'>
                        <div>Timeless</div>
                        <div>luxury</div>
                        <div>re-imagined</div>
                    </div>
                    <Image src='/chevalme-test/images/car-home.png' alt='Home and a car' width={1404} height={885} className='absolute top-[-320px] left-[47px] pointer-events-none' />
                    <div className='mt-[136px] text-sm'>
                        <span className={`${s.projects} ${s.projActive} mr-[89px]`}>Ready</span>
                        <span className={`${s.projects}`}>New Projects</span>
                    </div>
                    <div className='mt-[15px] ml-[-13px] flex text-sm'>
                        <button className='py-3 pl-2 grid place-items-center grid-cols-2 gap-1 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            Buy
                            <Image src='/chevalme-test/icons/expand_more.svg' alt='Arrow down' width={32} height={32} className='ml-[-10px] mr-[12px]' />
                        </button>
                        <button className='mr-[11px] p-3 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>Community or Building</button>
                        <div className={`${s.line}`} />
                        <button className='mx-[16px] p-3 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>Location</button>
                        <div className={`${s.line}`} />
                        <button className='mx-[18px] p-3 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>Price</button>
                        <div className={`${s.line}`} />
                        <button className='ml-3 py-3 pl-2 grid place-items-center grid-cols-2 rounded-3xl hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            Search
                            <Image src='/chevalme-test/icons/search.svg' alt='Search icon' width={17} height={17} className='ml-[-20px]' />
                        </button>
                    </div>
                </div>

                <div className="horizontalPanel mt-[-48px] ml-[100px]">
                    <div className='flex gap-8'>
                        <div className='gotham text-[69px] leading-[94%] font-[700]'>
                            <div>Featured</div>
                            <div>Properties</div>
                        </div>
                        <div className='text-[12px] mt-[39px]'>
                            <div className='flex'>
                                <div className={`${s.prop} ${s.propActive}`}>Villas</div>
                                <span className={`${s.prop}`}>Apartments</span>
                                <span className={`${s.prop}`}>View All</span>
                            </div>
                            <div className='flex mt-[17px]'>
                                <span className={`${s.prop}`}>Rent</span>
                                <span className={`${s.prop} ${s.propActive}`}>Buy</span>
                                <span className={`${s.prop}`}>Sell</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className={`${s.propPic} mt-[43px] w-[304px]`}>
                            <Image src='/chevalme-test/images/property.jpg' alt='Photo of a property' width={304} height={293} />
                            <div className='mt-[15px] ml-[10px]'>
                                <div className=' text-[15px] font-[700]'>Canal View Villa</div>
                                <div className='text-xs'>Vezul Residence, Business Bay.</div>
                                <div className='mt-[4px] flex gap-[17px] text-xs'>
                                    <div>
                                        <Image src='/chevalme-test/icons/bed.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                                        2
                                    </div>
                                    <div>
                                        <Image src='/chevalme-test/icons/bathtub.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                                        2
                                    </div>
                                    <div>
                                        <Image src='/chevalme-test/icons/crop_free.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                                        1,273 sqft
                                    </div>
                                </div>
                                <div className='text-[15px] mt-[3px] font-[700]'>AED 1,560.000</div>
                            </div>
                        </div>
                        <div className={`${s.propPic} mt-[43px] w-[304px]`}>
                            <Image src='/chevalme-test/images/property.jpg' alt='Photo of a property' width={304} height={293} />
                            <div className='mt-[15px] ml-[10px]'>
                                <div className=' text-[15px] font-[700]'>Canal View Villa</div>
                                <div className='text-xs'>Vezul Residence, Business Bay.</div>
                                <div className='mt-[4px] flex gap-[17px] text-xs'>
                                    <div>
                                        <Image src='/chevalme-test/icons/bed.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                                        2
                                    </div>
                                    <div>
                                        <Image src='/chevalme-test/icons/bathtub.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                                        2
                                    </div>
                                    <div>
                                        <Image src='/chevalme-test/icons/crop_free.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                                        1,273 sqft
                                    </div>
                                </div>
                                <div className='text-[15px] mt-[3px] font-[700]'>AED 1,560.000</div>
                            </div>
                        </div>
                        <div className={`${s.propPic} mt-[43px] w-[304px]`}>
                            <Image src='/chevalme-test/images/property.jpg' alt='Photo of a property' width={304} height={293} />
                            <div className='mt-[15px] ml-[10px]'>
                                <div className=' text-[15px] font-[700]'>Canal View Villa</div>
                                <div className='text-xs'>Vezul Residence, Business Bay.</div>
                                <div className='mt-[4px] flex gap-[17px] text-xs'>
                                    <div>
                                        <Image src='/chevalme-test/icons/bed.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                                        2
                                    </div>
                                    <div>
                                        <Image src='/chevalme-test/icons/bathtub.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                                        2
                                    </div>
                                    <div>
                                        <Image src='/chevalme-test/icons/crop_free.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                                        1,273 sqft
                                    </div>
                                </div>
                                <div className='text-[15px] mt-[3px] font-[700]'>AED 1,560.000</div>
                            </div>
                        </div>
                        <div className='mt-[43px] w-[304px]'>
                            <div className={`${s.lastProperty}`}>
                                <Image src='/chevalme-test/images/property.jpg' alt='Photo of a property' width={304} height={293} />
                                <div className={`${s.backdrop} text-[14px]`}>Explore All</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="horizontalPanel mt-[-48px]">
                    <div className='gotham'>
                        <div className='text-[69px] leading-[94%] font-[700]'>
                            <div>Our&nbsp;Services</div>
                        </div>
                        <div className='w-[480px] text-[25px] mt-[11px] font-[200] leading-[120%]'>
                            <div>A comprehensive investment experience tailored to high-end needs</div>
                        </div>
                    </div>
                    <div className='flex mt-[35px]'>
                        <div className={`${s.serviceBlock} w-[380px] pr-[48px]`}>
                            <div className='text-[20px]'>Sales</div>
                            <div className='mt-[20px] text-white text-xs leading-[170%]'>
                                <div>Slim Property team of professional agents boast a</div>
                                <div>strategic mindset, powered by a pool of high-end</div>
                                <div>properties — in collaboration with top developers and</div>
                                <div>investors- which allows them to identify the...</div>
                            </div>
                            <div className={`${s.readMore} mt-[15px] text-xs`}>Read More</div>
                        </div>
                        <div className={`${s.serviceBlock} w-[380px] pr-[48px]`}>
                            <div className='text-[20px]'>Current Services</div>
                            <div className='mt-[20px] text-white text-xs leading-[170%]'>
                                <div>Residential Real Estate Investment Advisory</div>
                                <div>(Primary and Resale)</div>
                                <div>Residential Real Estate Resale</div>
                                <div>Property Management</div>
                                <div>Commercial Real estate leasing and sale</div>
                            </div>
                        </div>
                        <div className={`w-[380px] pr-[48px]`}>
                            <div className='text-[20px]'>After Sales</div>
                            <div className='mt-[20px] text-white text-xs leading-[170%]'>But the efficiency of this remarkable sales team does not end with closing deals. Enter the equally exceptional after sales team – a dedicated group of experts who understand the importance of ...</div>
                            <div className={`${s.readMore} mt-[15px] text-xs`}>Read More</div>
                        </div>
                    </div>
                    <div className='mt-[56px] w-[1154px] h-[230px] px-[41px] pt-[56px] bg-cover text-white' style={{ backgroundImage: 'url(/chevalme-test/images/services-bg.jpg)' }}>
                        <div className='leading-[123%] text-[38px]'>Personalised Investment Advisory</div>
                        <div className='w-[480px] leading-[2.4]'>Connect with us for a comprehensive real estate investment experience tailored to high end needs</div>
                    </div>
                </div>

                <div className="horizontalPanel mt-[-48px]">
                    <div className='text-[69px] leading-[123%] font-[700]'>
                        <div>Instagram</div>
                    </div>
                    <div className='flex items-start text-sm mt-[13px] font-[200] leading-[177%]'>
                        <Image src='/chevalme-test/icons/instagram.svg' alt='Arrow down' width={20} height={20} className='mr-[9px]' />
                        <div>Slimproperties</div>
                    </div>
                    <div className='mt-[30px] flex'>
                        <Image src='/chevalme-test/images/1_inst.jpg' alt='Photo of a property' width={305} height={307} />
                        <Image src='/chevalme-test/images/2_inst.jpg' alt='Photo of a property' width={305} height={307} />
                        <Image src='/chevalme-test/images/3_inst.jpg' alt='Photo of a property' width={305} height={307} />
                        <div className={`${s.lastProperty}`}>
                            <Image src='/chevalme-test/images/property.jpg' alt='Photo of a property' width={304} height={293} />
                            <div className={`${s.backdrop} text-[14px]`}>Explore All</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ScrollingSections
