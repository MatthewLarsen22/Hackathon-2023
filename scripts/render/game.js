MyGame.render.Game = function(model, graphics) {
    'use strict';
    let renderer = MyGame.render;
    let background = renderer.Background(graphics);
    let egg = renderer.Egg(graphics);
    let characters = [];
    for (let i = 0; i < model.players.length; i++){
        characters.push(renderer.SmolAngryBoi(model.players[i], graphics));
    }

    function update(elapsedTime) {
        for (let i = 0; i < characters.length; i++) {
            characters[i].update(model.players[i], elapsedTime);
        }
        // for (let i = 0; i < eggs.length; i++){
        //     eggs[i].update(elapsedTime);
        // }
    }

    function render() {
        background.render(graphics);
        for (let i = 0; i < characters.length; i++) {
            characters[i].render(model.players[i]);
        }
        for (let i = 0; i < model.eggs.length; i++) {
            if (model.eggs[i]) {
                egg.render(model.eggs[i]);
            }
        }
    }

    let api = {
        update: update,
        render: render
    }

    return api;
}