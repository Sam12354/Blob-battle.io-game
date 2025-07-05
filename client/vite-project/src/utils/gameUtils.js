export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const drawGrid = (ctx, offsetX, offsetY, width, height, gridSize = 50) => {
    ctx.strokeStyle = "#ccc"
    ctx.lineWidth = 1

    for (let x = 0; x <= width; x += gridSize){
        ctx.beginPath()
        ctx.moveTo(offsetX + x, offsetY)

        ctx.lineTo(offsetX + x, offsetY + height)
        ctx.stroke()
    }

    for(let y = 0; y <= height; y += gridSize){
        ctx.beginPath()
        ctx.moveTo(offsetX, offsetY + y);
        ctx.lineTo(offsetX + width, offsetY + y);
        ctx.stroke()
    }
};

export const createFood = (count, mapWidth, mapHeight, mass = 10) => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

    return Array.from({ length: count }).map(() => ({
        id: Math.random().toString(36).substr(2, 9),
        x: Math.random() * mapWidth,
        y: Math.random() * mapHeight,
        mass,
        color: colors[Math.floor(Math.random() * colors.length)],
    }));
}

