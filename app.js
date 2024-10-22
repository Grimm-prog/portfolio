const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Aggiungi la classe 'show' se l'elemento è visibile
            entry.target.classList.add('show');
        } else {
            // Rimuovi la classe 'show' se l'elemento non è visibile
            entry.target.classList.remove('show');
        }
    });
});

// Seleziona la sezione contatti e applica la transizione orizzontale
const contattiSection = document.querySelector('#contatti');
contattiSection.classList.add('slide-in'); // Aggiungi la classe slide-in per la sezione contatti
observer.observe(contattiSection);

// Seleziona le sezioni che devono avere la transizione verticale
const hiddenElements = document.querySelectorAll('.hidden:not(#contatti)');
hiddenElements.forEach((el) => observer.observe(el));


window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    // Regola il fattore di movimento per l'effetto
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
