function GameModel(keyboard, objects) {
    let bird = objects.SmolAngryBoi({
        size: { x: 100, y: 100 },
        center: { x: 50, y: 150 },
        moveRate: 125 / 1000
    });

    function update(elapsedTime) {
    }

    function initialize() {
        keyboard.register('w', bird.moveUp);
        keyboard.register('a', bird.moveLeft);
        keyboard.register('s', bird.moveDown);
        keyboard.register('d', bird.moveRight);
    }

    function reportEvent(info) {
        switch(info.type) {

        }
    }

    initialize();

    let api = {
        update: update,
        get bird() { return bird; }
    }

    return api;
}