function GameModel(keyboard, objects) {
    let collisionGrid = [];
    let player1 = objects.SmolAngryBoi({
        grid: collisionGrid,
        size: { x: MyGame.constants.TILE_WIDTH, y: MyGame.constants.TILE_HEIGHT },
        center: { x: MyGame.constants.TILE_WIDTH * 3 / 2, y: MyGame.constants.TILE_HEIGHT * 3 / 2 },
        moveRate: MyGame.constants.STARTING_SPEED
    });

    function update(elapsedTime) {
    }

    function initialize() {
        for (let row = 0; row < MyGame.constants.TILES_PER_COL; row++) {
            collisionGrid.push(new Array(MyGame.constants.TILES_PER_ROW))
            for (let column = 0; column < MyGame.constants.TILES_PER_ROW; column++) {
                if (
                    row === 0 ||
                    column === 0 ||
                    row === MyGame.constants.TILES_PER_COL - 1 ||
                    row === MyGame.constants.TILES_PER_ROW - 1 ||
                    (row % 2 === 0 && column % 2 === 0)
                ){
                    collisionGrid[row][column] = 1;
                }
                else {
                    collisionGrid[row][column] = 0;
                }
            }
        }

        initializeKeyboard();
    }
    function initializeKeyboard() {
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