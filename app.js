const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting){
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
    });

});

//prendo gli elementi della classe hidden
const hiddenElements = document.querySelectorAll('.hidden');
console.log(hiddenElements);
hiddenElements.forEach((el) => observer.observe(el));