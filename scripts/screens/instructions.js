MyGame.screens['instructions'] = (function(manager) {
    'use strict';
    document.getElementById('instBB').addEventListener(
        'click',
        function() { manager.showScreen('mainMenu'); }
    );
    document.getElementById('mpButton').addEventListener(
        'click',
        function() { manager.showScreen('instructionsmp'); }
    );
    function initialize() {

    }

    function run() {

    }

    return {
        initialize: initialize,
        run: run
    };
}(MyGame.manager));