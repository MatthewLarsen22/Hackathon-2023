MyGame.screens['instructions'] = (function(manager) {
    'use strict';
    document.getElementById('instructionsBackButton').addEventListener(
        'click',
        function() { manager.showScreen('mainMenu'); }
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