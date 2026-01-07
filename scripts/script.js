import { drawGrid } from './canvas/grid.js';
import { createCar } from './objects/car.js';
import { gridToPosition } from './utils/utilities.js';
import { CELL_SIZE, CAR_WIDTH, CAR_HEIGHT } from "./utils/constants.js";

/**
 * Main game canvas and context
 */
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

/**
 * Offscreen canvas for grid rendering
 */
const gridCanvas = document.createElement('canvas');
gridCanvas.width = canvas.width;
gridCanvas.height = canvas.height;
const gridCtx = gridCanvas.getContext('2d');

/**
 * Clears the main canvas
 */
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Main function to repeat game loop
 */
function gameLoop() {
    clearCanvas();

    ctx.drawImage(gridCanvas, 0, 0);

    cars.forEach(car => car.update());
    cars.forEach(car => car.draw(ctx));

    requestAnimationFrame(gameLoop);
}

drawGrid(gridCtx, gridCanvas.width, gridCanvas.height, 50);

const spawn = gridToPosition(3, 5, CAR_WIDTH, CAR_HEIGHT);
const car = createCar(spawn.x, spawn.y);
let cars = [];
cars.push(car);

gameLoop(cars);