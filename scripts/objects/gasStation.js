import { CELL_SIZE, GAS_STATION_WIDTH, GAS_STATION_HEIGHT } from "../utils/constants.js";

export function createGasStation(x, y) {
    return {
        width: GAS_STATION_WIDTH,
        height: GAS_STATION_HEIGHT,
        color: "red",

        position: { x, y },
        direction: "down",

        parkingSpots: [0, 0, 0],

        draw(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        },

        update() {
            //refill car
        }
    };
}