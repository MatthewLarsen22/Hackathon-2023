MyGame.screens['highScores'] = (function(manager) {
    'use strict';
    document.getElementById('highScoresBackButton').addEventListener(
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