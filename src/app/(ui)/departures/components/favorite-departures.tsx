'use client';

import NextDeparturesAtStop from '@/app/(ui)/departures/components/next-departures-at-stop';
import { FavoriteStop } from '@/app/model/stop';
import { Heart, HeartPlus, Pencil } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';

export default function FavoriteDepartures() {
    const loadedFavorites = JSON.parse(localStorage.getItem('favoriteStops') || '[]') as FavoriteStop[];
    const [favorites, setFavorites] = useState<FavoriteStop[]>(loadedFavorites);
    const [editing, setEditing] = useState(false);

    const removeFavorite = (favorite: FavoriteStop) => {
        const newFavorites = [...favorites].filter(f => f.line !== favorite.line || f.direction !== favorite.direction);
        localStorage.setItem('favoriteStops', JSON.stringify(newFavorites));
        setFavorites(newFavorites);
    }

    return (
        <>
            <div className={clsx('flex items-center justify-between', {'mb-2': editing})}>
                <div className="flex items-center gap-x-2 font-bold">
                    <Heart size={18}/>
                    Favorite stops
                </div>
                <button className={clsx('p-2', {'py-2 ps-2': !editing, 'p-2 rounded-full bg-white': editing})} onClick={() => setEditing(!editing)}>
                    <Pencil size={18}/>
                </button>
            </div>
            {favorites.length === 0 &&
                <div className="w-full flex grow justify-center flex-col gap-2 items-center">
                    <HeartPlus size={36}/>
                    <div className="font-bold text-center">You don&apos;t have any favorite stop</div>
                    <div className="text-sm text-center">Find a stop and set a line as a favorite for the next departures to
                        appear here.
                    </div>
                </div>
            }
            {favorites.length > 0 &&
                <div className="grid grid-cols-2 grid-flow-row gap-3">
                    {favorites.map(stop => <NextDeparturesAtStop
                        key={`${stop.name}-${stop.line}-${stop.direction}`}
                        stop={stop}
                        showRemove={editing}
                        onRemove={removeFavorite}
                    />)}
                </div>
            }
        </>
    );
}