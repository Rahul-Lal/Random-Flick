import request from 'superagent'

/*
    Original link with fixed filmID number '707': 'A View To A Kill':
    const tmdbAPI = 'http://api.themoviedb.org/3/movie/707s?api_key=96628c0e6c6bba7100b21737333c56cf'

*/
let filmID = Math.floor(Math.random() * 999) + 1
let tmdbAPI = `http://api.themoviedb.org/3/movie/${filmID}s?api_key=96628c0e6c6bba7100b21737333c56cf`
const poster_source = 'https://image.tmdb.org/t/p/original'

export function getFilm() {
    return request.get(tmdbAPI)
        .then(res => {
            let title = res.body.title
            let overview = res.body.overview
            let poster_path = poster_source + res.body.poster_path

            console.log(title + '\n'
                + overview + '\n')

            console.image(poster_path)
            // return title, overview, poster_path
        })
        .catch(err => {
            console.image('https://i.gifer.com/XyGe.gif')
            return err.message
        })
}

module.export = {
    getFilm
}