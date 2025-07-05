import { useRef } from 'react';

const GameCanvas = () => {
    const canvasRef = useRef(null);
    const playerRef = useRef({ x: 2500, y: 2500, mass: 25 });
    const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const mapWidth = 5000;
    const mapHeight = 5000;
    const maxSpeed = 5;

    const foodRef = useFood(mapWidth, mapHeight);

    useEffect(() => {
        
        const canvas = canvasRef.current;   
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let animationFrameId;

        const update = () => {

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            const dx = mouseRef.current.x - centerX;
            const dy = mouseRef.current.y - centerY;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 5) {
                const angle = Math.atan2(dy, dx);
                
            }



            animationFrameId = requestAnimationFrame(update);
        }


    }, [mapWidth, mapHeight, maxSpeed, foodRef]);

};

export default GameCanvas;