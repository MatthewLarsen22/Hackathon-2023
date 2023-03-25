MyGame.objects.SmolAngryBoi = function(spec) {
    let direction = 'down';

    function moveUp(elapsedTime) {
        direction = 'up';
        spec.center.y -= (spec.moveRate * elapsedTime);
    }
    function moveDown(elapsedTime) {
        direction = 'down';
        spec.center.y += (spec.moveRate * elapsedTime);
    }

    function moveLeft(elapsedTime) {
        direction = 'left';
        spec.center.x -= (spec.moveRate * elapsedTime);
    }

    function moveRight(elapsedTime) {
        direction = 'right';
        spec.center.x += (spec.moveRate * elapsedTime);
    }

    let api = {
        get size() { return spec.size; },
        get center() { return spec.center; },
        get rotation() { return spec.rotation; },
        get direction() { return direction; },
        moveUp: moveUp,
        moveDown: moveDown,
        moveLeft: moveLeft,
        moveRight: moveRight
    };

    return api;
}