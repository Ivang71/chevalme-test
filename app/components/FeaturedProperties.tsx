import Image from 'next/image'
import s from '@/app/ui/scrollSection.module.css'
import '@/app/ui/t.css'

export const FeaturedProperties = () => {
    return (
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
    )
}