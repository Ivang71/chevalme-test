import '@/app/ui/global.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chevalme Test',
    description: 'Artem Tolochkov the frontend dev.',
    metadataBase: new URL('https://ivang71.github.io'),
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={` antialiased`}>{children}</body>
        </html>
    )
}
