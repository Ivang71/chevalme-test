'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/app/ui/home.module.css'

const routes = ['/', '/about', '/projects/ready', '/services', '/contact']
const routesMapping: { [k: string]: string } = {
    '/': 'Home',
    '/about': 'About',
    '/projects/ready': 'Properties',
    '/services': 'Services',
    '/contact': 'Contact'
}

export const Header = () => {
    const pathname = usePathname()

    return (
        <div className={`mb-[50px] sm:mb-0 px-[3vw] sm:px-[85px] h-fit sm:h-[340px] pt-[89px]`}>
            <Link href='/'>
                <Image src='/chevalme-test/texts/slim.svg' alt='Slim Properties logo' width={142} height={71} className='ml-[-4px]' />
            </Link>
            <nav className='mt-[41px] flex flex-wrap gap-[1px] text-sm'>
                {routes.map((route) => (
                    <Link key={route} href={route}>
                        <div
                            className={`${pathname === route ? styles.navActive : ''} cursor-pointer p-4 rounded-xl hover:bg-white/30 active:bg-white/60 hover:text-gray-900 active:text-black transition duration-200 ease-in-out`}
                        >
                            <span>{routesMapping[route]}</span>
                        </div>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

