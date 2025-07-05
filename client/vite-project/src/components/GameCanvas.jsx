import { useRef } from 'react';

const GameCanvas = () => {
    const canvasRef = useRef(null);
    const playerRef = useRef({ x: 2500, y: 2500, mass: 25 });
    const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const mapWidth = 5000;
    const mapHeight = 5000;
    const maxSpeed = 5;

    const foodRef = useFood(mapWidth, mapHeight);

};

export default GameCanvas;