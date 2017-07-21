document.addEventListener('DOMContentLoaded', () => {

    const drummer = {
        DOM: {
            key: document.getElementsByClassName('key')
        },

        playAudio(key) {
            const audio = document.querySelector(`audio[data-key='${key}']`);
            const button = document.querySelector(`div[data-key='${key}']`);

            if (!audio) return;
            audio.currentTime = 0;
            audio.play();
            this.transition(button)
        },

        transition(element) {
            element.classList.add('playing');
        },

        removeTransition(e) {
            if (e.propertyName !== 'transform') return;
            e.target.classList.remove('playing');
        }
    };

    /*********************    EVENTS   *******************/

    document.addEventListener('keydown', (e) => {
        drummer.playAudio(e.keyCode)
    });

    Array.from(drummer.DOM.key).forEach((element) => {
        element.addEventListener('click', (event) => {
            drummer.playAudio(event.currentTarget.dataset.key);
        });
        element.addEventListener('transitionend', (event) => {
            drummer.removeTransition(event);
        });
    });
});

