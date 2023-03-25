function GameModel(keyboard, objects) {
    let collisionGrid = [];
    let players = [];
    let eggs = [];
    let nextId = 0;

    function update(elapsedTime) {
        for (let i = 0; i < eggs.length; i++) {
            eggs[i].update(elapsedTime);
        }
    }

    function initialize() {
        for (let row = 0; row < MyGame.constants.TILES_PER_COL; row++) {
            collisionGrid.push(new Array(MyGame.constants.TILES_PER_ROW))
            for (let column = 0; column < MyGame.constants.TILES_PER_ROW; column++) {
                if (
                    row === 0 ||
                    column === 0 ||
                    column === MyGame.constants.TILES_PER_ROW - 1 ||
                    row === MyGame.constants.TILES_PER_COL - 1 ||
                    (row % 2 === 0 && column % 2 === 0)
                ){
                    collisionGrid[row][column] = MyGame.constants.BARRIER_BLOCK;
                }
                else {
                    collisionGrid[row][column] = MyGame.constants.EMPTY;
                }
            }
        }

        players.push(objects.SmolAngryBoi({
            id: 0,
            grid: collisionGrid,
            size: { x: MyGame.constants.TILE_WIDTH, y: MyGame.constants.TILE_HEIGHT },
            center: { x: MyGame.constants.TILE_WIDTH * 3 / 2, y: MyGame.constants.TILE_HEIGHT * 3 / 2 },
            moveRate: MyGame.constants.STARTING_SPEED,
            reportEvent
        }));
        players.push(objects.SmolAngryBoi({
            id: 1,
            grid: collisionGrid,
            size: { x: MyGame.constants.TILE_WIDTH, y: MyGame.constants.TILE_HEIGHT },
            center: { x: MyGame.constants.TILE_WIDTH * MyGame.constants.TILES_PER_ROW - (MyGame.constants.TILE_WIDTH * 3 / 2), y: MyGame.constants.TILE_HEIGHT * 3 / 2 },
            moveRate: MyGame.constants.STARTING_SPEED,
            reportEvent
        }));

        initializeKeyboard();
    }
    function initializeKeyboard() {
        keyboard.register('w', players[0].moveUp);
        keyboard.register('a', players[0].moveLeft);
        keyboard.register('s', players[0].moveDown);
        keyboard.register('d', players[0].moveRight);
        keyboard.register('q', players[0].layEgg);

        keyboard.register('ArrowUp', players[1].moveUp);
        keyboard.register('ArrowLeft', players[1].moveLeft);
        keyboard.register('ArrowDown', players[1].moveDown);
        keyboard.register('ArrowRight', players[1].moveRight);
        keyboard.register('/', players[1].layEgg);
    }

    function reportEvent(info) {
        switch(info.type) {
            case 'lay-egg':
                handleEggLaid(info.id, info.location);
                break;
            case 'eggsplode':
                handleEggsplosion(info.id, info.belongsTo, info.location);
                break;
        }
    }

    function handleEggLaid(playerId, location) {
        eggs.push(objects.Egg({
            id: nextId++,
            playerId,
            location,
            reportEvent
        }));
    }

    function handleEggsplosion(id, belongsTo, location) {
        eggs = eggs.filter(egg => egg.id !== id);
        players[belongsTo].returnEgg();

        //TODO: Determine which players were hit by the egg's power
    }

    initialize();

    let api = {
        update: update,
        get players() { return players; },
        get eggs() { return eggs; }
    }

    return api;
}