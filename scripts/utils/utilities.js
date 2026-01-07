import { CELL_SIZE } from "../utils/constants.js";

/**
 * Converts grid coordinates to canvas position,
 * centering the object inside the grid cell.
 *
 * @param {number} x - Grid column index
 * @param {number} y - Grid row index
 * @param {number} objectWidth - Width of the object in pixels
 * @param {number} objectHeight - Height of the object in pixels
 * @returns {{x: number, y: number}} Canvas position
 */
export function gridToPosition(x, y, objectWidth, objectHeight) {
    const pixelX = x * CELL_SIZE + (CELL_SIZE - objectWidth) / 2;
    const pixelY = y * CELL_SIZE + (CELL_SIZE - objectHeight) / 2;

    return { x: pixelX, y: pixelY };
}