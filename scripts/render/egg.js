MyGame.render.Egg = function(graphics){
    let model = MyGame.render.AnimatedModel({
        spriteSheet: 'assets/spritesheet-egg.png',
        spriteActionCount: 1,
        spriteFrameCount: 4,
        spriteTime: [[
            MyGame.constants.EGGSPLOSION_TIME / frames,
            MyGame.constants.EGGSPLOSION_TIME / frames,
            MyGame.constants.EGGSPLOSION_TIME / frames,
            MyGame.constants.EGGSPLOSION_TIME / frames]],
    }, graphics);

    function render(egg) {
        if (egg){
            model.render(egg);
        }
    }

    let api = {
        render: render
    }

    return api;
}