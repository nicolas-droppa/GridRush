/**
 * Draws a grid over the playing board canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
 * @param {number} width - Width of canvas in pixels.
 * @param {number} height - Height of canvas in pixels.
 * @param {number} cellSize - Size of one grid cell in pixels.
 * @param {number} offsetX - Horizontal offset of the grid (used for panning or scrolling).
 * @param {number} offsetY - Vertical offset of the grid (used for panning or scrolling).
 */
export function drawGrid(ctx, width, height, cellSize, offsetX = 0, offsetY = 0) {
    ctx.save();

    ctx.strokeStyle = '#c7c7c7';
    ctx.lineWidth = 1;
    ctx.beginPath();

    const maxX = width - 1;
    const maxY = height - 1;

    // Vertical lines
    for (let x = 0; x <= maxX; x += cellSize) {
        const px = Math.round(x + offsetX) + 0.5;
        ctx.moveTo(px, 0);
        ctx.lineTo(px, maxY);
    }

    // Horizontal lines
    for (let y = 0; y <= maxY; y += cellSize) {
        const py = Math.round(y + offsetY) + 0.5;
        ctx.moveTo(0, py);
        ctx.lineTo(maxX, py);
    }

    // fix: Force final horizontal and vertical line to draw
    ctx.moveTo(maxX + 0.5, 0);
    ctx.lineTo(maxX + 0.5, maxY);
    ctx.moveTo(0, maxY + 0.5);
    ctx.lineTo(maxX, maxY + 0.5);

    ctx.stroke();
    ctx.restore();
}

