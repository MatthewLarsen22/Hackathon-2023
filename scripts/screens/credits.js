MyGame.screens['credits'] = (function(manager) {
    'use strict';
    document.getElementById('creditsBackButton').addEventListener(
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