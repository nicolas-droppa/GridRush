import { CELL_SIZE, CAR_WIDTH, CAR_HEIGHT } from "../utils/constants.js";

export function createCar(x, y) {
    return {
        width: CAR_WIDTH,
        height: CAR_HEIGHT,
        color: "red",

        position: { x, y },
        direction: "down",
        
        speed: 0,
        maxSpeed: 2,
        acceleration: 0.05,

        draw(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        },

        update() {
            this.speed = Math.min(this.speed + this.acceleration, this.maxSpeed);
            this.position.y += this.speed;
        }
    };
}
