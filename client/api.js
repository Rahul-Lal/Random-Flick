import request from 'superagent'

//const tmdbAPI = 'http://api.themoviedb.org/3/movie/707s?api_key=96628c0e6c6bba7100b21737333c56cf'

const filmID = Math.floor(Math.random() * 999) + 1
const tmdbAPI = `http://api.themoviedb.org/3/movie/${filmID}s?api_key=96628c0e6c6bba7100b21737333c56cf`

export function getFilm () {
    request.get(tmdbAPI)
    .then(res => {
        console.log('res.body.title: ' + res.body.title)
        return res.body.title
    })
    .catch(err => {
        console.log('ERROR: ' + res.body.title)
        return res.body.title
    })
}