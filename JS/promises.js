
const nameBoxFilm = document.getElementById('filmName');
const seelctButton = document.getElementById('selectButton');
const boxImg = document.getElementById('imgFilm');
let genreID;
$.fn.timedDisable = function(time) {
    if (time == null) { time = 4000; }
    return $(this).each(function() {
        $(this).attr('disabled', 'disabled');
        var disabledElem = $(this);
        setTimeout(function() {
            disabledElem.removeAttr('disabled');
        }, time);
    });
};

$('.radioGenre').on('click', function () {
    $('.radioGenre').removeClass('focus1');
    $(this).addClass('focus1');
    genreID = $(this).attr('id');
    



    const getFilmsInfo = (idFilm) => {
        const filmsPromise = fetch(`https://api.sampleapis.com/movies/${genreID}`);
        
        return filmsPromise
            .then(data => data.json())
            .then(list => {
                const nowFilm = list.find(res => res.id === idFilm);
                return nowFilm;
        
            }).catch(err => console.log(err))
    }

    const showFilm = () => getFilmsInfo(idFilm)
        .then(nowFilm => {
            console.log(nowFilm);
            nameBoxFilm.textContent = `"${nowFilm.title}"`;
            boxImg.src = nowFilm.posterURL;
            let imdbID = nowFilm.imdbId;
            nameBoxFilm.href = `https://www.imdb.com/title/${imdbID}/`;
            return nowFilm;
        });
        
        seelctButton.addEventListener('click', () => {
            const min = 0;
            let max = 77;
            idFilm = Math.floor(Math.random() * (max - min) + min);
            $('#load').addClass('loader');
            $('#imgFilm').fadeTo(1, 0, 'linear');
            $('#filmName').fadeTo(1, 0, 'linear');
            setTimeout(() => $('#load').removeClass('loader'), 2000);
            // $('.loader').fadeTo(1000, 0, 'linear');
            $('#selectButton').timedDisable();
            
            setTimeout(function () { $('#filmName').fadeTo(200, 1, 'linear'); $('#imgFilm').fadeTo(200, 1, 'linear')  }, 2000);
            showFilm();
        }, false );
   
});

// export default showFilm;
