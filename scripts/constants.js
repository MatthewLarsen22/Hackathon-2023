MyGame.constants.CANVAS_WIDTH = document.getElementById('canvas').width;
MyGame.constants.CANVAS_HEIGHT = document.getElementById('canvas').height;

MyGame.constants.TILES_PER_ROW = 15;
MyGame.constants.TILES_PER_COL = 13;

MyGame.constants.TILE_HEIGHT = MyGame.constants.CANVAS_HEIGHT / MyGame.constants.TILES_PER_COL;
MyGame.constants.TILE_WIDTH = MyGame.constants.TILE_HEIGHT;

MyGame.constants.STARTING_SPEED = (2.5 * MyGame.constants.TILE_WIDTH) / 1000