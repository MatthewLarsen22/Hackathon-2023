MyGame.render.Game = function(model, graphics) {
    'use strict';
    let renderer = MyGame.render;
    let birdRender = renderer.SmolAngryBoi(model.bird, graphics);

    function update(elapsedTime) {
        birdRender.update(model.bird, elapsedTime);
    }
    function render() {
        birdRender.render(model.bird);
    }

    let api = {
        update: update,
        render: render
    }

    return api;
}