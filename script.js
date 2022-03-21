const numberOfFilms = +prompt('Сколько', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const films = prompt ('Odin', '');
const rating = prompt ('Na skolko', '');
const films2 = prompt ('Odin', '');
const rating2= prompt ('Na skolko', '');

personalMovieDB.movies[films] = rating;