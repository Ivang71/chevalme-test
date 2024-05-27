import s from '@/app/ui/scrollSection.module.css'
import homeStyles from '@/app/ui/home.module.css'

export const OurServices = () => {
    return (
        <div className="max-w-[100%]">
            <div className='gotham'>
                <div className='text-[40px] sm:text-[69px] leading-[94%] font-[700]'>
                    <div>Our Services</div>
                </div>
                <div className='sm:w-[480px] text-[25px] mt-[11px] font-[200] leading-[120%]'>
                    <div>A comprehensive investment experience tailored to high-end needs</div>
                </div>
            </div>
            <div className='flex flex-wrap gap-x-2 gap-y-14 mt-[35px]'>
                <div className={`${s.serviceBlock} sm:w-[380px]`}>
                    <div className='text-[20px]'>Sales</div>
                    <div className='mt-[20px] text-white text-xs leading-[170%]'>
                        <div>Slim Property team of professional agents boast a</div>
                        <div>strategic mindset, powered by a pool of high-end</div>
                        <div>properties — in collaboration with top developers and</div>
                        <div>investors- which allows them to identify the...</div>
                    </div>
                    <div className={`${s.readMore} mt-[15px] text-xs`}>Read More</div>
                </div>
                <div className={`${s.serviceBlock} sm:w-[380px]`}>
                    <div className='text-[20px]'>Current Services</div>
                    <div className='mt-[20px] text-white text-xs leading-[170%]'>
                        <div>Residential Real Estate Investment Advisory</div>
                        <div>(Primary and Resale)</div>
                        <div>Residential Real Estate Resale</div>
                        <div>Property Management</div>
                        <div>Commercial Real estate leasing and sale</div>
                    </div>
                </div>
                <div className={`sm:w-[380px]`}>
                    <div className='text-[20px]'>After Sales</div>
                    <div className='mt-[20px] text-white text-xs leading-[170%]'>But the efficiency of this remarkable sales team does not end with closing deals. Enter the equally exceptional after sales team – a dedicated group of experts who understand the importance of ...</div>
                    <div className={`${s.readMore} mt-[15px] text-xs`}>Read More</div>
                </div>
            </div>
            <div className={`${homeStyles.textShadow} mt-[56px] max-w-[100%] lg:w-[1154px] sm:h-[230px] px-[41px] pt-[56px] bg-cover text-white`} style={{ backgroundImage: 'url(/chevalme-test/images/services-bg.jpg)' }}>
                <div className='leading-[123%] text-[38px]'>Personalised Investment Advisory</div>
                <div className='sm:w-[480px] leading-[2.4]'>Connect with us for a comprehensive real estate investment experience tailored to high end needs</div>
            </div>
        </div>
    )
}