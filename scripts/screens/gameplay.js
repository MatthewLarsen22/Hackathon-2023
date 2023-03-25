MyGame.screens['gamePlay'] = (function(graphics){
    'use strict';

    let lastTimeStamp = performance.now();
    let cancelNextRequest = true;

    let model = null;

    function processInput(elapsedTime) {

    }

    function update(elapsedTime) {

    }

    function render() {
        graphics.clear();
    }

    function gameLoop(time) {
        let elapsedTime = time - lastTimeStamp;
        lastTimeStamp = time;

        processInput(elapsedTime);
        update(elapsedTime);
        render();

        if (!cancelNextRequest) {
            requestAnimationFrame(gameLoop);
        }
    }

    function initialize() {

    }

    function run() {

    }

    return {
        initialize: initialize,
        run: run
    };
}(MyGame.graphics));