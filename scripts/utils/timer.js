export function createTimer() {
    let startTime = 0;
    let elapsed = 0;
    let running = false;

    return {
        start() {
            if (!running) {
                startTime = performance.now() - elapsed;
                running = true;
            }
        },

        stop() {
            if (running) {
                elapsed = performance.now() - startTime;
                running = false;
            }
        },

        reset() {
            startTime = performance.now();
            elapsed = 0;
        },

        update() {
            if (running) {
                elapsed = performance.now() - startTime;
            }
        },

        getTime() {
            return elapsed; // return time in ms
        },

        getSeconds() {
            return Math.floor(elapsed / 1000);
        },

        isRunning() {
            return running;
        }
    };
}