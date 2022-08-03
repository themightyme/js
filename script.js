const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Последний просмотренный фильм?', ''),
    b = prompt('Какую дадите ему оценку?', ''),
    c = prompt('Последний просмотренный фильм?', ''),
    d = prompt('Какую дадите ему оценку?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);