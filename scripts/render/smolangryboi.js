MyGame.render.SmolAngryBoi = function(smolAngryBoi, graphics){
    let model = MyGame.render.AnimatedModel({
        spriteSheet: 'assets/spritesheet-smolangryboi.png',
        spriteActionCount: 4,
        spriteFrameCount: 4,
        spriteTime: [[125, 125, 125, 125], [125, 125, 125, 125], [125, 125, 125, 125], [125, 125, 125, 125]],
    }, graphics);

    function update(smolAngryBoi, elapsedTime) {
        switch (smolAngryBoi.direction){
            case 'down':
                model.setAction(0);
                break;
            case 'up':
                model.setAction(1);
                break;
            case 'right':
                model.setAction(2);
                break;
            case 'left':
                model.setAction(3);
                break;
        }
        model.update(elapsedTime);
    }
    function render(smolAngryBoi) {
        model.render(smolAngryBoi);
    }

    let api = {
        update: update,
        render: render
    }

    return api;
}