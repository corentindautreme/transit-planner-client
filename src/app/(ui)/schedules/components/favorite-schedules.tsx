'use client';

import { FavoriteSchedule } from '@/app/model/departures';
import { useState } from 'react';
import { Heart } from 'lucide-react';
import ScheduleHeader from '@/app/(ui)/schedules/components/schedule-header';
import Link from 'next/link';

export default function FavoriteSchedules() {
    const loadedFavorites = JSON.parse(localStorage.getItem('favoriteSchedules') || '[]') as FavoriteSchedule[];
    const [favorites, setFavorites] = useState<FavoriteSchedule[]>(loadedFavorites);

    const onFavoriteToggled = (favorites: FavoriteSchedule[]) => {
        setFavorites(favorites);
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-x-2 font-bold mb-1">
                <Heart size={18}/>
                Favorite schedules
            </div>

            {favorites.length === 0 &&
                <div className="w-full flex flex-col gap-2 items-center">
                    <div className="text-sm text-center py-3">Flag schedules as favorites and a shortcut will appear here.
                    </div>
                </div>
            }
            {favorites.map((favorite, index) => (
                <Link href={`/schedules/${favorite.line}/${favorite.stopId}`} key={`favorite-schedule-${index}`}>
                    <ScheduleHeader line={favorite.line} type={favorite.type}
                                    stop={{id: favorite.stopId, name: favorite.stopName}}
                                    toggleFavoriteCallback={onFavoriteToggled}/>
                </Link>
            ))}
            <div className="w-full mt-3 mb-2 border-t-1 border-black/50"></div>
        </div>
    );
}