import '@/app/ui/index.css'
import styles from '@/app/ui/home.module.css'
import { HomeHero, FeaturedProperties, OurServices, Instagram, Footer } from '@/app/components'

export default async function Page() {
    return (
        <>
            <HomeHero />
            <FeaturedProperties />
            <OurServices />
            <Instagram />
        </>
    )
}
