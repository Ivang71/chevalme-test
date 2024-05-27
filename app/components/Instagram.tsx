import Image from 'next/image'
import s from '@/app/ui/scrollSection.module.css'

export const Instagram = () => {
    return (

        <div className="">
            <div className='text-[40px] sm:text-[69px] leading-[123%] font-[700]'>
                <div>Instagram</div>
            </div>
            <div className='flex items-start text-sm mt-[13px] font-[200] leading-[177%]'>
                <Image src='/chevalme-test/icons/instagram.svg' alt='Arrow down' width={20} height={20} className='mr-[9px]' />
                <div>Slimproperties</div>
            </div>
            <div className='mt-[30px] flex flex-wrap'>
                <Image src='/chevalme-test/images/1_inst.jpg' alt='Photo of a property' width={305} height={307} />
                <Image src='/chevalme-test/images/2_inst.jpg' alt='Photo of a property' width={305} height={307} />
                <Image src='/chevalme-test/images/3_inst.jpg' alt='Photo of a property' width={305} height={307} />
                <div className={`${s.lastProperty}`}>
                    <Image src='/chevalme-test/images/property.jpg' alt='Photo of a property' width={304} height={293} />
                    <div className={`${s.backdrop} text-[14px]`}>Explore All</div>
                </div>
            </div>
        </div>
    )
}