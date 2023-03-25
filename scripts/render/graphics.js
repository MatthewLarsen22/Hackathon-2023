MyGame.graphics = (function() {
    'use strict';

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    function clear() {
        context.save();
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();
    }

    function drawTexture(image, center, rotation, size) {
        context.save();

        context.translate(center.x, center.y);
        context.rotate(rotation);
        context.translate(-center.x, -center.y);

        context.drawImage(
            image,
            center.x - size.x / 2,
            center.y - size.y / 2,
            size.x,
            size.y
        );

        context.restore();
    }

    function drawSubTexture(image, index, subTextureWidth, center, rotation, size) {
        context.save();

        context.translate(center.x, center.y);
        context.rotate(rotation);
        context.translate(-center.x, -center.y);

        context.drawImage(
            image,
            subTextureWidth * index,
            0,
            subTextureWidth,
            image.height,
            center.x - size.x / 2,
            center.y - size.y / 2,
            size.x,
            size.y
        );

        context.restore();
    }

    let api = {
        clear: clear,
        drawTexture: drawTexture,
        drawSubTexture: drawSubTexture
    };

    return api;
}());