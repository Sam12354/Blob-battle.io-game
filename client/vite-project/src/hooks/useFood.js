import { useRef, useEffect } from 'react';
import { createFood } from '../utils/gameUtils';

const useFood = (mapWidth, mapHeight, initialCount = 200, respawnCount = 10, respawnInterval = 4000) => {
    const foodRef = useRef(createFood(initialCount, mapWidth, mapHeight));

    useEffect(() => {
        const interval = setInterval(() => {
            const newFood = createFood(respawnCount, mapWidth, mapHeight);
            foodRef.current = foodRef.current.concat(newFood);
        }, respawnInterval);

        return () => clearInterval(interval);

    }, [mapWidth, mapHeight, respawnCount, respawnInterval])

    return foodRef
}