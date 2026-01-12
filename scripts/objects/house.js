import { CELL_SIZE, HOUSE_WIDTH, HOUSE_HEIGHT } from "../utils/constants.js";

export function createHouse(x, y) {
    return {
        width: HOUSE_WIDTH,
        height: HOUSE_HEIGHT,
        color: "yellow",

        position: { x, y },
        direction: "down",

        spawnCooldown: 500,

        draw(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        },

        update() {
            //spawn car in cd
        }
    };
}