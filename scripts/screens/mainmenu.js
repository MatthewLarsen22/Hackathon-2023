MyGame.screens['mainMenu'] = (function(manager){
    'use strict';

    function initialize() {
        document.getElementById('playGame').addEventListener(
            'click',
            function() { manager.showScreen('gamePlay'); }
        );

        document.getElementById('highScores').addEventListener(
            'click',
            function() { manager.showScreen('highScores'); }
        );

        document.getElementById('credits').addEventListener(
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