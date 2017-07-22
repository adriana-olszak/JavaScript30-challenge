document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelectorAll('.controls input');

    function updateValues() {
        const suffix = this.dataset.sizing || '';
        const value = this.value;
        const name = this.name;

        document.documentElement.style.setProperty(`--${name}`, value + suffix);
    }

    input.forEach((input) => {
        input.addEventListener('change', updateValues);
        input.addEventListener('mousemove', updateValues)
    });

});

