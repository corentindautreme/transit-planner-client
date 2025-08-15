'use client';

import { LineSign } from '@/app/(ui)/lines/components/line-and-direction-sign';
import { Heart, MapPin } from 'lucide-react';
import { LineType } from '@/app/model/line-type';
import { useState } from 'react';
import { FavoriteSchedule } from '@/app/model/departures';
import { Stop } from '@/app/model/stop';
import { clsx } from 'clsx';

type BasicStop = Omit<Stop, 'connections'>;

export default function ScheduleHeader({line, type, stop, toggleFavoriteCallback}: {
    line: string,
    type: LineType,
    stop: BasicStop,
    toggleFavoriteCallback?: (favorites: FavoriteSchedule[]) => void;
}) {
    const loadedFavorites = JSON.parse(localStorage.getItem('favoriteSchedules') || '[]') as FavoriteSchedule[];
    const [favorites, setFavorites] = useState<FavoriteSchedule[]>(loadedFavorites);

    const isFavorite = () => {
        return favorites.some(f => f.stopId === stop.id && f.line === line);
    }

    const toggleFavorite = () => {
        let newFavorites: FavoriteSchedule[];
        if (isFavorite()) {
            newFavorites = [...favorites].filter(f => f.stopId !== stop.id || f.line !== line);
            localStorage.setItem('favoriteSchedules', JSON.stringify(newFavorites));
            setFavorites(newFavorites);
        } else {
            newFavorites = [
                ...favorites,
                {
                    stopId: stop.id,
                    stopName: stop.name,
                    line: line,
                    type: type
                }
            ];
            localStorage.setItem('favoriteSchedules', JSON.stringify(newFavorites));
            setFavorites(newFavorites);
        }
        if (toggleFavoriteCallback) {
            toggleFavoriteCallback(newFavorites);
        }
    };

    return <div className="flex flex-col p-3 bg-background rounded-lg">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
                <LineSign name={line} type={type}/>
                <MapPin size={18} className="shrink-0 ms-1"/>
                <div className="text-base/4">{stop.name}</div>
            </div>
            <button className="ps-4" onClick={(e) => {
                e.preventDefault();
                toggleFavorite()
            }}>
                <div className={clsx({
                    'text-yellow-500': isFavorite() && type == 'tram',
                    'text-red-500': isFavorite() && type == 'trolleybus',
                    'text-sky-500': isFavorite() && type == 'bus'
                })}>
                    <Heart size={18} className={clsx({'fill-current': isFavorite()})}/>
                </div>
            </button>
        </div>
    </div>
}