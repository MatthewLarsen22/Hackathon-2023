MyGame.screens['instructionsmp'] = (function(manager) {
    'use strict';
    document.getElementById('mpinstBB').addEventListener(
        'click',
        function() { manager.showScreen('mainMenu'); }
    );
    document.getElementById('spButton').addEventListener(
        'click',
        function() { manager.showScreen('instructions'); }
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