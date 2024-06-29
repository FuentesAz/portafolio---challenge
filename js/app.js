document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.formulario-grupo input, .formulario-grupo textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('input-focused');
            const label = this.previousElementSibling;
            if (label) {
                label.classList.add('label-focused');
            }
        });

        input.addEventListener('blur', function() {
            this.parentNode.classList.remove('input-focused');
            const label = this.previousElementSibling;
            if (label) {
                label.classList.remove('label-focused');
            }
        });
    });
});