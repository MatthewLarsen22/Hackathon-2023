MyGame.render.Background = function(graphics){
    let subTextureWidth = 0
    let subTextureHeight = 0;
    let tileHeight = MyGame.constants.TILE_HEIGHT;
    let tileWidth = MyGame.constants.TILE_WIDTH;
    let tileSize = { x: tileWidth, y: tileHeight };

    let image = new Image();
    let isReady = false;

    image.onload = function() {
        isReady = true;
        subTextureWidth = image.width / 7;
        subTextureHeight = image.height;
    }
    image.src = "assets/tilemap-path.jpg";

    function render() {
        for (let i = 0; i < MyGame.constants.TILES_PER_COL; i++){
            for (let j = 0; j < MyGame.constants.TILES_PER_ROW; j++) {
                let tileIndex = -1;
                let rotation = 0;

                // Corner Border Tiles
                if (i === 0 && j === 0){
                    tileIndex = 0;
                }
                else if (i === 0 && j === MyGame.constants.TILES_PER_ROW - 1){
                    tileIndex = 0;
                    rotation = 90;
                }
                else if (i === MyGame.constants.TILES_PER_COL - 1 && j === MyGame.constants.TILES_PER_ROW - 1) {
                    tileIndex = 0;
                    rotation = 180;
                }
                else if (i === MyGame.constants.TILES_PER_COL - 1 && j === 0) {
                    tileIndex = 0;
                    rotation = 270;
                }

                // Straight Border Tiles
                else if (i === 0 || i === MyGame.constants.TILES_PER_COL - 1){
                    tileIndex = 1;
                }
                else if (j === 0 || j === MyGame.constants.TILES_PER_ROW - 1) {
                    tileIndex = 1;
                    rotation = 90;
                }

                // Corner Path Tiles
                if (i === 1 && j === 1){
                    tileIndex = 2;
                }
                else if (i === 1 && j === MyGame.constants.TILES_PER_ROW - 2){
                    tileIndex = 2;
                    rotation = 90;
                }
                else if (i === MyGame.constants.TILES_PER_COL - 2 && j === MyGame.constants.TILES_PER_ROW - 2) {
                    tileIndex = 2;
                    rotation = 180;
                }
                else if (i === MyGame.constants.TILES_PER_COL - 2 && j === 1) {
                    tileIndex = 2;
                    rotation = 270;
                }

                // Straight Path Tiles
                else if (i % 2 === 0 && j % 2 === 1){
                    tileIndex = 3;
                }
                else if (i % 2 === 1 && j % 2 === 0) {
                    tileIndex = 3;
                    rotation = 90;
                }

                // T Path Tiles
                else if (i === 1){
                    tileIndex = 4;
                }
                else if (j === MyGame.constants.TILES_PER_ROW - 2) {
                    tileIndex = 4;
                    rotation = 90;
                }
                else if (i === MyGame.constants.TILES_PER_COL - 2) {
                    tileIndex = 4;
                    rotation = 180;
                }
                else if (j === 1) {
                    tileIndex = 4;
                    rotation = 270;
                }

                // Barrier Tiles
                else if (i % 2 === 0){
                    tileIndex = 5;
                }

                // Open Path Tiles
                else {
                    tileIndex = 6;
                }
                let center = { x: (j * tileWidth) + (tileWidth / 2), y: (i * tileHeight) + (tileHeight / 2) }
                graphics.drawSubTexture(image, 0, tileIndex, subTextureWidth, image.height, center, rotation, tileSize);
            }
        }
    }

    let api = {
        render: render
    }

    return api;
}