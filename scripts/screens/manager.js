MyGame.manager = (function(screens) {
    'use strict';

    function showScreen(id) {
        let screen = 0;
        let active = null;

        active = document.getElementsByClassName('active');
        for (screen = 0; screen < active.length; screen++) {
            active[screen].classList.remove('active');
        }

        console.log(id);
        screens[id].run();

        document.getElementById(id).classList.add('active');
    }

    function initialize() {
        let screen = null;

        for (screen in screens) {
            if (screens.hasOwnProperty(screen)) {
                screens[screen].initialize();
            }
        }

        showScreen('mainMenu');
    }

    return {
        initialize: initialize,
        showScreen: showScreen
    };
}(MyGame.screens));