"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
// const a = prompt("Один из последних просмотренных фильмов?"),
//   b = prompt("На сколько оцените его?");
// personalMovieDB.movies[a] = b;

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?"),
//     b = prompt("На сколько оцените его?");
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
//   console.log(personalMovieDB);
// }

// if (personalMovieDB.count <= 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }
// console.log(personalMovieDB);

// Two more loop methods //
let i = 0;
while (i < 2) {
  i++;
  const a = prompt("Один из последних просмотренных фильмов?"),
    b = prompt("На сколько оцените его?");
  personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);

do {
  i++;
  const a = prompt("Один из последних просмотренных фильмов?"),
    b = prompt("На сколько оцените его?");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
} while (i < 1);
console.log(personalMovieDB);
