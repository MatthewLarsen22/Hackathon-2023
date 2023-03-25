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

    function drawSubTexture(image, indexY, indexX, subTextureWidth, subTextureHeight, center, rotation, size) {
        context.save();

        context.translate(center.x, center.y);
        context.rotate(rotation);
        context.translate(-center.x, -center.y);

        context.drawImage(
            image,
            subTextureWidth * indexX,
            subTextureHeight * indexY,
            subTextureWidth,
            subTextureHeight,
            center.x - size.x / 2,
            center.y - size.y / 2,
            size.x,
            size.y
        );

        context.restore();
    }

    function drawRectangle(rect, fillStyle, strokeStyle) {
        context.save();
        context.translate(rect.center.x, rect.center.y);
        context.rotate(rect.rotation);
        context.translate(-rect.center.x, -rect.center.y);

        context.fillStyle = fillStyle;
        context.fillRect(rect.center.x - rect.size.x / 2, rect.center.y - rect.size.y / 2, rect.size.x, rect.size.y);

        context.strokestyle = strokeStyle;
        context.strokeRect(rect.center.x - rect.size.x / 2, rect.center.y - rect.size.y / 2, rect.size.x, rect.size.y);

        context.restore();
    }

    let api = {
        clear: clear,
        drawTexture: drawTexture,
        drawSubTexture: drawSubTexture
    };

    return api;
}());