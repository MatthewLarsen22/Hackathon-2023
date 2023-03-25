MyGame.objects.Egg = function(spec) {
    let id = spec.id;
    let timeRemaining = MyGame.constants.EGGSPLOSION_TIME;
    let belongsTo = spec.playerId;
    let location = spec.location;
    let size = { x: MyGame.constants.TILE_WIDTH, y: MyGame.constants.TILE_HEIGHT };
    let center = { x: (spec.location.x + 0.5) * MyGame.constants.TILE_WIDTH, y: (spec.location.y + 0.5) * MyGame.constants.TILE_HEIGHT }
    let rotation = 0;

    function update(elapsedTime) {
        timeRemaining -= elapsedTime;
        if (timeRemaining < 0) {
            eggsplode()
        }
    }

    function eggsplode() {
        spec.reportEvent({
            type: 'eggsplode',
            id,
            belongsTo,
            location
        });
    }

    let api = {
        update: update,
        get id() { return id; },
        get size() { return size; },
        get center() { return center; },
        get rotation() { return rotation; },
        get timeRemaining() { return timeRemaining; }
    }

    return api;
}