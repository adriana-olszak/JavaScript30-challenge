document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');

    function toggleActiveClass() {
        this.classList.toggle('open');
    }

    function toggleOpenClass(e) {
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('active-open');
        }
    }

    panels.forEach(panel => {
        panel.addEventListener('click', toggleActiveClass);
    });
    panels.forEach(panel => {
        panel.addEventListener('transitionend', toggleOpenClass);
    });
});