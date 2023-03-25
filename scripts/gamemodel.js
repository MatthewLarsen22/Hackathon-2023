function GameModel(keyboard, objects) {
    let player1 = objects.SmolAngryBoi({
        size: { x: MyGame.constants.CANVAS_HEIGHT / MyGame.constants.TILES_PER_COL, y: MyGame.constants.CANVAS_HEIGHT / MyGame.constants.TILES_PER_COL },
        center: { x: 50, y: 150 },
        moveRate: 125 / 1000
    });

    function update(elapsedTime) {
    }

    function initialize() {
        keyboard.register('w', player1.moveUp);
        keyboard.register('a', player1.moveLeft);
        keyboard.register('s', player1.moveDown);
        keyboard.register('d', player1.moveRight);
    }

    function reportEvent(info) {
        switch(info.type) {

        }
    }

    initialize();

    let api = {
        update: update,
        get player1() { return player1; }
    }

    return api;
}