angular.module('omdbMovieApp')
.service('movieDataService', function($http){
  var movies = [
    {
      "id": 1,
      "favorite": false,
      "date": moment( new Date().getTime() - 285678 ).fromNow(),
      "votes": 5,
      "comments": [],
      "Title": "The Matrix",
      "Year": "1999",
      "Rated": "R",
      "Released": "31 Mar 1999",
      "Runtime": "136 min",
      "Genre": "Action, Sci-Fi",
      "Director": "Lana Wachowski, Lilly Wachowski",
      "Writer": "Lilly Wachowski, Lana Wachowski",
      "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
      "Plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "Language": "English",
      "Country": "USA, Australia",
      "Awards": "Won 4 Oscars. Another 33 wins & 44 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX300.jpg",
      "Metascore": "73",
      "imdbRating": "8.7",
      "imdbVotes": "1,185,648",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Response": "True"
    }
  ];
  var service = {
    movies: movies,
    movieById: function(movieId){
      return this.movies.filter(function(movie){
        return movie.id === +movieId;
      }).pop();
    },
    getMovie: function(movieName) {
      var movie = movieName.split(' ').join('+');
      return
      $http.get('https://g-omdbapi.herokuapp.com/?t='+ movie +'&y=&plot=short&r=json');
    },
    addMovie: function (movie){
      var movies = this.movies,
      movieId =movies.length+1;
      movie['id'] = movieId;
      movie['liked'] = false;
      movie['date'] = moment( new Date().getTime() ).fromNow();
      movie['votes'] = 0;
      movie['comments'] = [];
      return this.movies.push(movie);

    }
  }
  return service;
})
