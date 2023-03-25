MyGame.screens['mainMenu'] = (function(manager){
    'use strict';

    function initialize() {
        document.getElementById('settingsButton').addEventListener(
            'click',
            function() { manager.showScreen('settings'); }
        );
        document.getElementById('instructionsButton').addEventListener(
            'click',
            function() { manager.showScreen('instructions'); }
        );
        document.getElementById('playGame').addEventListener(
            'click',
            function() { manager.showScreen('gamePlay'); }
        );

        document.getElementById('highScoresButton').addEventListener(
            'click',
            function() { manager.showScreen('highScores'); }
        );

        document.getElementById('creditsButton').addEventListener(
            'click',
            function() { manager.showScreen('credits'); }
        );
    }

    function run() {

    }

    return {
        initialize: initialize,
        run: run
    };
}(MyGame.manager));