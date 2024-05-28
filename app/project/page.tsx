'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import s from '@/app/ui/scrollSection.module.css'

export default function ProjectPage() {
    const searchParams = useSearchParams()

    const id = searchParams.get('id')

    // request data

    const data = {
        id: '123testid456',
        imageUrl: '/chevalme-test/images/property.jpg',
        bigImageUrl: '/chevalme-test/images/prop-close.jpg',
        altText: 'Photo of a property',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
        title: 'Canal View Villa',
        location: 'Vezul Residence, Business Bay.',
        bedrooms: 2,
        bathrooms: 2,
        area: '1,273 sqft',
        price: 'AED 1,560.000',
    }

    return (
        <>
            <div className='pb-[37px] w-full flex flex-wrap gap-8 border-b border-solid border-[#EDDFD0] border-opacity-50'>
                <div className='flex flex-col'>
                    <div className='gotham text-[40px] sm:text-[69px] leading-[94%] font-[700]'>
                        <div>{data.title}</div>
                    </div>
                    <div className='mt-[10px] text-lg'>
                        {data.location}
                    </div>
                    <div className='mt-[50px]'>
                        <button className='px-[25px] py-[9px] pl-[15px] grid place-items-center grid-cols-2 gap-[11px] rounded-3xl border border-solid border-[#EDDFD0] text-sm hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/chevalme-test/icons/share.svg' alt='Share icon' width={29} height={29} />
                            Share
                        </button>
                    </div>
                    <div className='mt-[21px] flex gap-[22px] text-sm'>
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
                    <div className='mt-[31px] max-w-[483px] text-sm leading-[202%]'>
                        {data.description}
                    </div>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <Image src={data.bigImageUrl} alt={data.altText} width={791} height={490} />
                    <div className='mx-auto max-h-[101px] flex gap-[11px]'>
                        <Image src='/chevalme-test/images/prop-close-thumb.jpg' alt={data.altText} width={101} height={97} className='max-w-[22%]' />
                        <Image src='/chevalme-test/images/prop-close-thumb.jpg' alt={data.altText} width={101} height={97} className='max-w-[22%]' />
                        <Image src='/chevalme-test/images/prop-close-thumb.jpg' alt={data.altText} width={101} height={97} className='max-w-[22%]' />
                        <div className={`${s.viewMorePics} `}>
                            <Image src='/chevalme-test/images/prop-close-thumb.jpg' alt='Photo of a property' width={101} height={97} />
                            <div className={`${s.backdrop} text-[10px]`}>
                                <Image src='/chevalme-test/icons/camera.svg' alt='Camera icon' width={20} height={20} />
                                <span>20+ Photos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[36px] pb-[46pxpx] w-full flex gap-[28px] border-b border-solid border-[#EDDFD0] border-opacity-50'>
                das
            </div>
        </>
    )
}
