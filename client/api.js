import request from 'superagent'

/*
    Original link with fixed filmID number '707': 'A View To A Kill':
    const tmdbAPI = 'http://api.themoviedb.org/3/movie/707s?api_key=96628c0e6c6bba7100b21737333c56cf'
*/
const filmID = Math.floor(Math.random() * 999) + 1
const tmdbAPI = `http://api.themoviedb.org/3/movie/${filmID}s?api_key=96628c0e6c6bba7100b21737333c56cf`
const poster_source = 'https://image.tmdb.org/t/p/original'

export function getFilm() {
    request.get(tmdbAPI)
        .then(res => {
            const title = res.body.title
            const overview = res.body.overview
            const poster_path = res.body.poster_path

            console.log('Title: ' + title)
            console.log('Overview: ' + overview)
            console.log('Poster: ' + poster_source + poster_path)
            return title, overview, poster_path
        })
        .catch(err => {
            console.log('https://i.gifer.com/XyGe.gif')
            return err.message
        })
}