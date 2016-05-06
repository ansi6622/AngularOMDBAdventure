angular.module('omdbMovieApp')
.factory('movieDataService', function($http){
  var moviesArray = [];
  var factory = {
    movies: moviesArray,
    movieById: function(movieId){
      return this.movies.filter(function(movie){
        return movie.id === +movieId;
      }).pop();
    },
    getMovie: function(movieName) {
      var movie = movieName.split(' ').join('+');
      return $http.get('https://g-omdbapi.herokuapp.com/?t='+ movie +'&y=&plot=short&r=json');
    },
    addMovie: function (movie){
      var movies = this.movies,
      movieId = movies.length+1;
      movie['id'] = movieId;
      movie['favorite'] = false;
      movie['date'] = moment( new Date().getTime() ).fromNow();
      movie['votes'] = 0;
      movie['comments'] = [];
      return this.movies.push(movie);

    }
  }
  return factory;
})
