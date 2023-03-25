MyGame.objects.SmolAngryBoi = function(spec) {
    let direction = 'down';
    let availableEggs = 1;

    function moveUp(elapsedTime) {
        direction = 'up';
        let proposedPosition = { x: spec.center.x, y: spec.center.y - (spec.moveRate * elapsedTime)};
        if (! checkCollision(proposedPosition)) {
            spec.center.y = proposedPosition.y;
        }
        else {
            let proposedTileX = proposedPosition.x / MyGame.constants.TILE_WIDTH;
            let proposedTileY = proposedPosition.x / MyGame.constants.TILE_HEIGHT;

            if (spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 1 && proposedTileX - Math.floor(proposedTileX) > 0.7){
                moveRight(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 1 && proposedTileX - Math.floor(proposedTileX) < 0.3){
                moveLeft(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 0 && proposedTileX - Math.floor(proposedTileX) > 0.55) {
                moveLeft(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 0 && proposedTileX - Math.floor(proposedTileX) < 0.45) {
                moveRight(elapsedTime);
            }
        }
    }
    function moveDown(elapsedTime) {
        direction = 'down';
        let proposedPosition = { x: spec.center.x, y: spec.center.y + (spec.moveRate * elapsedTime)};
        if (! checkCollision(proposedPosition)) {
            spec.center.y = proposedPosition.y;
        }
        else {
            let proposedTileX = proposedPosition.x / MyGame.constants.TILE_WIDTH;
            let proposedTileY = proposedPosition.x / MyGame.constants.TILE_HEIGHT;

            if (spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 1 && proposedTileX - Math.floor(proposedTileX) > 0.7){
                moveRight(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 1 && proposedTileX - Math.floor(proposedTileX) < 0.3){
                moveLeft(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 0 && proposedTileX - Math.floor(proposedTileX) > 0.55) {
                moveLeft(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 0 && proposedTileX - Math.floor(proposedTileX) < 0.45) {
                moveRight(elapsedTime);
            }
        }
    }

    function moveLeft(elapsedTime) {
        direction = 'left';
        let proposedPosition = { x: spec.center.x - (spec.moveRate * elapsedTime), y: spec.center.y};
        if (! checkCollision(proposedPosition)) {
            spec.center.x = proposedPosition.x;
        }
        else {
            let proposedTileX = proposedPosition.x / MyGame.constants.TILE_WIDTH;
            let proposedTileY = proposedPosition.x / MyGame.constants.TILE_HEIGHT;

            if (spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 1 && proposedTileY - Math.floor(proposedTileY) > 0.7){
                moveDown(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 1 && proposedTileY - Math.floor(proposedTileY) < 0.3){
                moveUp(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 0 && proposedTileY - Math.floor(proposedTileY) > 0.55) {
                moveUp(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 0 && proposedTileY - Math.floor(proposedTileY) < 0.45) {
                moveDown(elapsedTime);
            }
        }
    }

    function moveRight(elapsedTime) {
        direction = 'right';
        let proposedPosition = { x: spec.center.x + (spec.moveRate * elapsedTime), y: spec.center.y};
        if (! checkCollision(proposedPosition)) {
            spec.center.x = proposedPosition.x;
        }
        else {
            let proposedTileX = proposedPosition.x / MyGame.constants.TILE_WIDTH;
            let proposedTileY = proposedPosition.x / MyGame.constants.TILE_HEIGHT;

            if (spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 1 && proposedTileY - Math.floor(proposedTileY) > 0.7){
                moveDown(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 1 && proposedTileY - Math.floor(proposedTileY) < 0.3){
                moveUp(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 0 && proposedTileY - Math.floor(proposedTileY) > 0.55) {
                moveUp(elapsedTime);
            }
            else if(spec.grid[Math.floor(proposedTileY)][Math.floor(proposedTileX)] === 0 && proposedTileY - Math.floor(proposedTileY) < 0.45) {
                moveDown(elapsedTime);
            }
        }
    }

    function layEgg() {

    }

    function checkCollision(proposedPosition) {
        // Get the proposed grid coords
        let x = proposedPosition.x / MyGame.constants.TILE_WIDTH;
        let y = proposedPosition.y / MyGame.constants.TILE_HEIGHT;

        // Check to see if the chicken collides with any of the neighboring cells
        for (let row = 0; row < MyGame.constants.TILES_PER_COL; row++){
            for (let column = 0; column < MyGame.constants.TILES_PER_ROW; column++){
                if (spec.grid[row][column] === 1){
                    let r1 = {
                        left: row * MyGame.constants.TILE_WIDTH,
                        right: (row + 1) * MyGame.constants.TILE_WIDTH,
                        top: column * MyGame.constants.TILE_HEIGHT,
                        bottom: (column + 1) * MyGame.constants.TILE_HEIGHT
                    }
                    let r2 = {
                        left: (x - 0.45) * MyGame.constants.TILE_WIDTH,
                        right: (x + 0.45) * MyGame.constants.TILE_WIDTH,
                        top: (y - 0.45) * MyGame.constants.TILE_HEIGHT,
                        bottom: (y + 0.45) * MyGame.constants.TILE_HEIGHT
                    }
                    if (AABBIntersectionTest(r1, r2)){
                        return  true;
                    }
                }
            }
        }
        return false;
    }
    function layEgg() {
        if (availableEggs > 0){
            console.log("attempting to lay egg");
        }
    }

    let api = {
        get size() { return spec.size; },
        get center() { return spec.center; },
        get rotation() { return spec.rotation; },
        get direction() { return direction; },
        moveUp: moveUp,
        moveDown: moveDown,
        moveLeft: moveLeft,
        moveRight: moveRight
    };

    return api;
}