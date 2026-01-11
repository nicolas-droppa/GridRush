import { CELL_SIZE, SHOP_WIDTH, SHOP_HEIGHT } from "../utils/constants.js";

export function createShop(x, y) {
    return {
        width: SHOP_WIDTH,
        height: SHOP_HEIGHT,
        color: "red",

        position: { x, y },
        direction: "down",

        parkingSpots: [0, 0, 0],

        draw(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        },

        update() {
            //hadle shop logic
        }
    };
}