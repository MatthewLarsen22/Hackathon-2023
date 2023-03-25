MyGame.screens['gamePlay'] = (function(objects, manager, input, graphics){
    'use strict';

    let lastTimeStamp = performance.now();
    let cancelNextRequest = true;

    let myKeyboard = input.Keyboard();
    let model = null;
    let renderer = null;

    function processInput(elapsedTime) {
        myKeyboard.update(elapsedTime);
    }

    function update(elapsedTime) {
        model.update(elapsedTime);
        renderer.update(elapsedTime);
    }

    function render() {
        graphics.clear();

        renderer.render(model, graphics);
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
        model = GameModel(myKeyboard, objects);
        renderer = MyGame.render.Game(model, graphics);

        lastTimeStamp = performance.now();
        cancelNextRequest = false;
        requestAnimationFrame(gameLoop);
    }

    return {
        initialize: initialize,
        run: run
    };
}(MyGame.objects, MyGame.manager, MyGame.input, MyGame.graphics));