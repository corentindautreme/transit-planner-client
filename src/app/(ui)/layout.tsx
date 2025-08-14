import type { Metadata, Viewport } from 'next';
import '../globals.css';
import NavBar from '@/app/components/nav-bar';
import { Nunito } from 'next/font/google'

const nunito = Nunito({
    subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
    title: 'Transit Planner',
    description: 'TODO'
};

export const viewport: Viewport = {
    themeColor: [
        {media: '(prefers-color-scheme: light)', color: '#f0b100'},
        {media: '(prefers-color-scheme: dark)', color: '#f0b100'}
    ]
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`antialiased ${nunito.className} bg-yellow-500`}>
        <div className="h-[100dvh]">
            <div className="h-[88dvh] p-2">
                {children}
            </div>
            <div className="fixed w-full bottom-[2dvh]">
                <NavBar/>
            </div>
        </div>
        </body>
        </html>
    );
}
