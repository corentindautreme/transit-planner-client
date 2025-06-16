import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/app/components/nav-bar';
import { Nunito } from 'next/font/google'

const nunito = Nunito({
    subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
    title: 'Transit Planner',
    description: 'TODO'
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`antialiased ${nunito.className}`}>
        <div className="h-[100dvh] bg-yellow-500">
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
