MyGame.render.AnimatedModel = function(spec, graphics) {
    'use strict';

    let animationTime = 0;
    let actionIndex = 0;
    let frameIndex = 0;
    let subTextureWidth = 0;
    let subTextureHeight = 0;
    let image = new Image();
    let isReady = false;

    image.onload = function() {
        isReady = true;
        subTextureWidth = image.width / spec.spriteFrameCount;
        subTextureHeight = image.height / spec.spriteActionCount;
    }
    image.src = spec.spriteSheet;

    function update(elapsedTime) {
        animationTime += elapsedTime;

        if (animationTime >= spec.spriteTime[actionIndex][frameIndex]) {
            animationTime -= spec.spriteTime[actionIndex][frameIndex];
            frameIndex += 1;

            frameIndex = frameIndex % spec.spriteActionCount;
        }
    }

    function setAction(index) {
        actionIndex = index;
    }

    function render(model) {
        if (isReady) {
            graphics.drawSubTexture(image, actionIndex, frameIndex, subTextureWidth, subTextureHeight, model.center, model.rotation, model.size);
        }
    }

    let api = {
        update: update,
        setAction: setAction,
        render: render
    };

    return api;
}