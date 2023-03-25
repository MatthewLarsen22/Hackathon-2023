MyGame.render.Game = function(model, graphics) {
    'use strict';
    let renderer = MyGame.render;
    let birdRender = renderer.SmolAngryBoi(model.player1, graphics);
    let background = renderer.Background(graphics);

    function update(elapsedTime) {
        birdRender.update(model.player1, elapsedTime);
    }
    function render() {
        background.render(graphics);
        birdRender.render(model.player1);
    }

    let api = {
        update: update,
        render: render
    }

    return api;
}