import { drawGrid } from './canvas/grid.js';
import { createCar } from './objects/car.js';
import { createGasStation } from './objects/gasStation.js';
import { createHouse } from './objects/house.js';
import { createShop } from './objects/store.js';
import { gridToPosition } from './utils/utilities.js';
import { createTimer } from './utils/timer.js';
import { CELL_SIZE, CAR_WIDTH, CAR_HEIGHT, GAS_STATION_HEIGHT, GAS_STATION_WIDTH, SHOP_HEIGHT, SHOP_WIDTH, HOUSE_HEIGHT, HOUSE_WIDTH
 } from "./utils/constants.js";

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

    timer.update();

    ctx.drawImage(gridCanvas, 0, 0);

    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText(`Time: ${timer.getSeconds()}s`, 10, 20);

    cars.forEach(car => car.update());
    cars.forEach(car => car.draw(ctx));
    gasStations.forEach(gs => gs.update());
    gasStations.forEach(gs => gs.draw(ctx));
    shops.forEach(shop => shop.update());
    shops.forEach(shop => shop.draw(ctx));
    houses.forEach(house => house.update());
    houses.forEach(house => house.draw(ctx));

    requestAnimationFrame(gameLoop);
}

drawGrid(gridCtx, gridCanvas.width, gridCanvas.height, 50);

const spawn = gridToPosition(3, 5, CAR_WIDTH, CAR_HEIGHT);
const car = createCar(spawn.x, spawn.y);
let cars = [];
cars.push(car);

const spawnGS = gridToPosition(5, 5, GAS_STATION_HEIGHT, GAS_STATION_WIDTH);
let gasStation = createGasStation(spawnGS.x, spawnGS.y);

let gasStations = [];
gasStations.push(gasStation);

const spawnS = gridToPosition(1, 1, SHOP_HEIGHT, SHOP_WIDTH);
let shop = createShop(spawnS.x, spawnS.y);

let shops = [];
shops.push(shop);

const spawnH = gridToPosition(6, 3, HOUSE_HEIGHT, HOUSE_WIDTH);
let house = createHouse(spawnH.x, spawnH.y);

let houses = [];
houses.push(house);

const timer = createTimer();
timer.start();

gameLoop(cars, gasStations, shops, houses);