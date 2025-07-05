export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const drawGrid = (ctx, offsetX, offsetY, width, height, gridSize = 50) => {
    ctx.strokeStyle = "#ccc"
    ctx.lineWidth = 1

    for (x = 0; x <= width; x += gridSize){
        
    }
}