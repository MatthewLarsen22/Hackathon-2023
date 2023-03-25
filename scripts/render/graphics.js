MyGame.graphics = (function() {
    'use strict';

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    function clear() {
        context.save();
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();
    }

    return {
        clear: clear
    };
}());