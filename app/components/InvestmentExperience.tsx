import s from '@/app/ui/main.module.css'

export const InvestmentExperience = () => {
    return (
        <div className='flex flex-wrap gap-x-2 gap-y-14 mt-[35px]'>
            <div className={`${s.serviceBlock} sm:w-[380px]`}>
                <div className='text-[20px]'>Sales</div>
                <div className='mt-[20px] text-white text-xs leading-[170%] font-[200]'>
                    <div>Slim Property team of professional agents boast a</div>
                    <div>strategic mindset, powered by a pool of high-end</div>
                    <div>properties — in collaboration with top developers and</div>
                    <div>investors- which allows them to identify the...</div>
                </div>
                <div className={`${s.readMore} mt-[15px] text-xs`}>Read More</div>
            </div>
            <div className={`${s.serviceBlock} sm:w-[380px]`}>
                <div className='text-[20px]'>Current Services</div>
                <div className='mt-[20px] text-white text-xs leading-[170%] font-[200]'>
                    <div>Residential Real Estate Investment Advisory</div>
                    <div>(Primary and Resale)</div>
                    <div>Residential Real Estate Resale</div>
                    <div>Property Management</div>
                    <div>Commercial Real estate leasing and sale</div>
                </div>
            </div>
            <div className={`sm:w-[380px]`}>
                <div className='text-[20px]'>After Sales</div>
                <div className='mt-[20px] text-white text-xs leading-[170%] font-[200]'>But the efficiency of this remarkable sales team does not end with closing deals. Enter the equally exceptional after sales team – a dedicated group of experts who understand the importance of ...</div>
                <div className={`${s.readMore} mt-[15px] text-xs`}>Read More</div>
            </div>
        </div>
    )
}