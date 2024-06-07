'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useLayoutEffect } from 'react'
import styles from '@/app/ui/home.module.css'
import '@/app/ui/index.css'

const routes = ['/', '/about', '/projects/ready', '/services', '/contact']
const routeNameMapping: { [k: string]: string } = {
    '/': 'Home',
    '/about': 'About',
    '/projects/ready': 'Properties',
    '/services': 'Services',
    '/contact': 'Contact',
}
const isRouteActive = (route: string, path: string): boolean => {
    if (path === '/' && route === '/') return true
    if (route !== '/' && path.includes(route)) return true
    if (route === '/projects/ready' && path.includes('project')) return true
    return false
}

const useMenuState = () => {
    const [isOpen, setIsOpen] = useState(false)
    const body = (typeof window === "undefined") ? null : document.querySelector('body')
    const toggleMenu = () => {
        setIsOpen(!isOpen)
        body?.classList.toggle('overflow-hidden')
        const relatives = (typeof window === "undefined") ? null : document.querySelectorAll("[class*='relative']")
        relatives?.forEach((e) => e.classList.toggle('opacity-0'))
    }
    return { isOpen, toggleMenu }
}


export const Header = () => {
    const path = usePathname()
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const { isOpen, toggleMenu } = useMenuState()

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isLargeScreen ? (
        <div className={` mb-[50px] sm:mb-0 px-[3vw] sm:px-[85px] h-[340px] pt-[30px] lg:pt-[89px] flex lg:flex-col`}>
            <Link href='/'>
                <Image src='/slim-properties/logos/slim.svg' alt='Slim Properties logo' width={142} height={71} className='ml-[-4px]' />
            </Link>
            <nav className='z-50 mt-[41px] flex flex-wrap gap-[1px] text-sm'>
                {routes.map((route) => (
                    <Link key={route} href={route + '/'}>
                        <div className={`${isRouteActive(route, path) ? styles.navActive : ''}
                        cursor-pointer p-4 rounded-xl hover:bg-white/30 active:bg-white/60 hover:text-gray-900 active:text-black transition duration-200 ease-in-out`}>
                            <span>{routeNameMapping[route]}</span>
                        </div>
                    </Link>
                ))}
            </nav>
        </div>
    ) : (
        <div className={`mb-[50px] md:mb-0 px-[15px] md:px-[85px] h-[160px] pt-[30px] lg:pt-[89px] flex justify-between`}>
            <Link href='/'>
                <Image src='/slim-properties/logos/slim.svg' alt='Slim Properties logo' width={142} height={71}
                    className='ml-[-4px] w-[76px] h-[38px] lg:w-[142px] lg:h-[71px]' />
            </Link>
            <button className='lg:hidden p-[1px] w-[24px] h-[23px] flex items-center justify-center focus:outline-none bg-[#EDDFD0]' onClick={toggleMenu}>
                <svg className='w-[26px] h-[26px] text-gray-700' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M4 6H20M4 12H20M4 18H20' stroke='currentColor' strokeWidth='1' strokeLinecap='round' />
                </svg>
            </button>
            <div className={`z-1000 px-[15px] md:px-[85px] pt-[30px] lg:pt-[89px] ${isOpen? 'scale-y-100 pointer-events-auto' : 'scale-y-0 pointer-events-none'}
                fixed inset-0 bg-[#EDDFD0] origin-top origin-center transition duration-1000 ease-[cubic-bezier(.16,1,.3,1)]`}>
                <div className='flex justify-between'>
                    <Link href='/'>
                        <Image src='/slim-properties/logos/slim_dark.svg' alt='Slim Properties logo' width={76} height={38} className='ml-[-4px]' />
                    </Link>
                    <div onClick={toggleMenu} className='p-3'>
                        <Image src='/slim-properties/icons/close.svg' alt='Close' width={14} height={14} className='ml-[-4px]' />
                    </div>
                </div>
                <nav className={`mt-[36px] flex flex-col gap-[1px] lg:hidden ${isOpen ? 'flex' : 'hidden'} text-[#827161] gotham font-[600] text-[20px] text-center`}>
                    {routes.map((route) => (
                        <Link key={route} href={route + '/'} onClick={toggleMenu}>
                            <div className={`${isRouteActive(route, path) ? styles.menuNavActive : ''}
                  cursor-pointer p-4 rounded-xl hover:bg-white/30 active:bg-white/60 hover:text-gray-900 active:text-black transition duration-200 ease-in-out`}>
                                <span>{routeNameMapping[route]}</span>
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}
