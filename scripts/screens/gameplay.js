MyGame.screens['gamePlay'] = (function(objects, manager, input, graphics){
    'use strict';

    let lastTimeStamp = performance.now();
    let cancelNextRequest = true;

    let myKeyboard = input.Keyboard();
    let model = null;
    let renderer = null;
    let song = null;

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
        song = document.createElement('audio');
        myKeyboard.register('Escape', function() {
            cancelNextRequest = true;
            song.pause();
            song.remove();
            manager.showScreen('mainMenu');
        });
    }

    function run() {
        song.setAttribute('src', 'assets/Eggsplosion.mp3');
        song.setAttribute('autoplay', 'autoplay');
        song.setAttribute('loop', 'true');
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