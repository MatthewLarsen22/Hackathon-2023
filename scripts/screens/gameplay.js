MyGame.screens['gamePlay'] = (function(input, graphics){
    'use strict';

    let lastTimeStamp = performance.now();
    let cancelNextRequest = true;

    let myKeyboard = input.Keyboard();
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
        myKeyboard.register('Escape', function() {
            cancelNextRequest = true;

            manager.showScreen('mainMenu');
        });
    }

    function run() {

    }

    return {
        initialize: initialize,
        run: run
    };
}(MyGame.input, MyGame.graphics));