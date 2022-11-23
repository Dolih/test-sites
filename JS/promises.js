
const nameBoxFilm = document.getElementById('filmName');
const seelctButton = document.getElementById('selectButton');
const boxImg = document.getElementById('imgFilm');
let idFilm

const getFilmsInfo = (idFilm) => {
    const filmsPromise = fetch('https://api.sampleapis.com/movies/animation');
    
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
        showFilm();
    }, false );
    

export default showFilm;
