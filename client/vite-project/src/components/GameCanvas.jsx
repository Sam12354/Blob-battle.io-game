import { useRef } from 'react';

const GameCanvas = () => {
    const canvasRef = useRef(null);
    const playerRef = useRef({ x: 2500, y: 2500, mass: 25 });

    const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });


};

export default GameCanvas;