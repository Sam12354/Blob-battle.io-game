import { useEffect, useRef } from 'react';
import { clamp, drawGrid } from '../utils/gameUtils';
import useFood from '../hooks/useFood';

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

                const speed = Math.min(maxSpeed, distance * 0.01);
                playerRef.current.x += Math.cos(angle) * speed;
                playerRef.current.y += Math.sin(angle) * speed;
            }

            playerRef.current.x = clamp(playerRef.current.x, playerRef.current.mass, mapWidth - playerRef.current.mass);
            playerRef.current.y = clamp(playerRef.current.y, playerRef.current.mass, mapHeight - playerRef.current.mass);

            const offsetX = clamp(canvas.width / 2 - playerRef.current.x, canvas.width - mapWidth, 0);
            const offsetY = clamp(canvas.height / 2 - playerRef.current.y, canvas.height - mapHeight, 0);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#fafafa';
            ctx.fillRect(offsetX, offsetY, mapWidth, mapHeight);

            ctx.strokeStyle = '#aaa';
            ctx.lineWidth = 5;
            ctx.strokeRect(offsetX, offsetY, mapWidth, mapHeight);
            drawGrid(ctx, offsetX, offsetY, mapWidth, mapHeight);

            foodRef.current = foodRef.current.filter(food => {
                const distX = playerRef.current.x - food.x;
                const distY = playerRef.current.y - food.y;
                const dist = Math.sqrt(distX * distX + distY * distY);

                if (dist < playerRef.current.mass + food.mass) {
                    playerRef.current.mass += 0.5;
                    return false;
                }

                ctx.beginPath();
                ctx.arc(offsetX + food.x, offsetY + food.y, food.mass, 0, Math.PI * 2);
                ctx.fillStyle = food.color;
                ctx.fill();
                ctx.strokeStyle = '#660000';
                ctx.lineWidth = 1;
                ctx.stroke();

            });


            animationFrameId = requestAnimationFrame(update);
        }


    }, [mapWidth, mapHeight, maxSpeed, foodRef]);

};

export default GameCanvas;