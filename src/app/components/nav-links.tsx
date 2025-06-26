'use client';

import { JSX } from 'react';
import { GitCommit, House, Route } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { clsx } from 'clsx';

type LinkName = 'Home' | 'Departures' | 'Lines';

const links: { name: LinkName, href: string, icon: JSX.Element }[] = [
    {
        name: 'Home',
        href: '/',
        icon: <House/>
    },
    {
        name: 'Departures',
        href: '/departures',
        icon: <GitCommit/>,
    },
    {
        name: 'Lines',
        href: '/lines',
        icon: <Route/>,
    }
];

export default function NavLinks() {
    const pathName = usePathname();
    // extract the "main" path for subpaths like /lines/{name}, etc.
    const significantPath = pathName.substring(0, pathName.slice(1).indexOf('/') + 1);
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'relative flex flex-col gap-y-1 grow items-center justify-center font-medium hover:text-foreground',
                            {
                                'text-foreground': pathName == link.href || significantPath == link.href,
                                'text-foreground/50': pathName != link.href && significantPath != link.href
                            }
                        )}
                    >
                        <div
                            className={clsx('flex flex-col items-center rounded-full p-2.5 hover:bg-white hover:text-foreground',
                                {
                                    'text-foreground bg-white': pathName == link.href || significantPath == link.href,
                                    'text-foreground/50': pathName != link.href && significantPath != link.href
                                }
                            )}>
                            {link.icon}
                        </div>
                        <div className="text-xs">{link.name}</div>
                    </Link>
                );
            })}
        </>
    );
}