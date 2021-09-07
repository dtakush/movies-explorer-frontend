document.querySelector('.searchform__input').oninput = function() {
    let value = this.value.trim();
    let movies = document.querySelectorAll('.card__title');

    if (value !== '') {
        movies.forEach(function(elem) {
            if(elem.nameRU.innerText.search(value) === -1) {
                elem.classList.add('card__hide');
            } else {
                elem.classList.remove('card__hide');
            }
        })
    } else {
        movies.forEach(function(elem) {
            elem.classList.remove('card__hide');
        })
    }
}