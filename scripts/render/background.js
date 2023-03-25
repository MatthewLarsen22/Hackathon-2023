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
        for (let row = 0; row < MyGame.constants.TILES_PER_COL; row++){
            for (let column = 0; column < MyGame.constants.TILES_PER_ROW; column++) {
                let tileIndex = -1;
                let rotation = 0;

                // Corner Border Tiles
                if (row === 0 && column === 0){
                    tileIndex = 0;
                }
                else if (row === 0 && column === MyGame.constants.TILES_PER_ROW - 1){
                    tileIndex = 0;
                    rotation = 90;
                }
                else if (row === MyGame.constants.TILES_PER_COL - 1 && column === MyGame.constants.TILES_PER_ROW - 1) {
                    tileIndex = 0;
                    rotation = 180;
                }
                else if (row === MyGame.constants.TILES_PER_COL - 1 && column === 0) {
                    tileIndex = 0;
                    rotation = 270;
                }

                // Straight Border Tiles
                else if (row === 0){
                    tileIndex = 1;
                }
                else if (column === MyGame.constants.TILES_PER_ROW - 1) {
                    tileIndex = 1;
                    rotation = 90;
                }
                else if(row === MyGame.constants.TILES_PER_COL - 1){
                    tileIndex = 1;
                    rotation = 180;
                }
                else if (column === 0) {
                    tileIndex = 1;
                    rotation = 270;
                }

                // Corner Path Tiles
                else if (row === 1 && column === 1){
                    tileIndex = 2;
                }
                else if (row === 1 && column === MyGame.constants.TILES_PER_ROW - 2){
                    tileIndex = 2;
                    rotation = 90;
                }
                else if (row === MyGame.constants.TILES_PER_COL - 2 && column === MyGame.constants.TILES_PER_ROW - 2) {
                    tileIndex = 2;
                    rotation = 180;
                }
                else if (row === MyGame.constants.TILES_PER_COL - 2 && column === 1) {
                    tileIndex = 2;
                    rotation = 270;
                }

                // Straight Path Tiles
                else if (row % 2 === 1 && column % 2 === 0){
                    tileIndex = 3;
                }
                else if (row % 2 === 0 && column % 2 === 1) {
                    tileIndex = 3;
                    rotation = 90;
                }

                // T Path Tiles
                else if (row === 1){
                    tileIndex = 4;
                }
                else if (column === MyGame.constants.TILES_PER_ROW - 2) {
                    tileIndex = 4;
                    rotation = 90;
                }
                else if (row === MyGame.constants.TILES_PER_COL - 2) {
                    tileIndex = 4;
                    rotation = 180;
                }
                else if (column === 1) {
                    tileIndex = 4;
                    rotation = 270;
                }

                // Barrier Tiles
                else if (row % 2 === 0){
                    tileIndex = 5;
                }

                // Open Path Tiles
                else {
                    tileIndex = 6;
                }
                let center = { x: (column * tileWidth) + (tileWidth / 2), y: (row * tileHeight) + (tileHeight / 2) }
                graphics.drawSubTexture(image, 0, tileIndex, subTextureWidth, image.height, center, rotation, tileSize);
            }
        }
    }

    let api = {
        render: render
    }

    return api;
}