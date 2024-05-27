import '@/app/ui/index.css'
import { HomeHero, FeaturedProperties, OurServices, Instagram } from '@/app/components'

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
