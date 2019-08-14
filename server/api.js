import request from 'superagent'

const filmID = Math.floor(Math.random() * 999) + 1
const tmdbAPI = 'http://api.themoviedb.org/3/movie/707s?api_key=96628c0e6c6bba7100b21737333c56cf'
// const tmdbAPI = `http://api.themoviedb.org/3/movie/${filmID}s?api_key=96628c0e6c6bba7100b21737333c56cf`

function getFilm () {
    request.get(tmdbAPI)
    .then(res => {
        console.log(res.body)
//        return res.body.original_title
    })
}

module.export = {
    getFilm
} 