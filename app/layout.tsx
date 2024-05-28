import '@/app/ui/global.css'
import Image from 'next/image'
import { Metadata } from 'next'
import { Header, Footer, SmoothScrolling } from '@/app/components'

export const metadata: Metadata = {
    title: 'Slim Properties',
    description: 'The ultimate real estate agency in UAE.',
    metadataBase: new URL('https://ivang71.github.io'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className='text-[#eddfd0] helveticaNeue'>
                    <Header />
                    <Image src='/slim-properties/images/bg.jpeg' alt='Background' width={1934} height={1154} className='z-[-50] fixed top-0 w-full h-full' />
                    <main>
                        <div className='mb-[200px] px-[3vw] sm:px-[85px] flex flex-col items-center gap-[200px]'>
                            <SmoothScrolling>
                                {children}
                            </SmoothScrolling>
                        </div>
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
