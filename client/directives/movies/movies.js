angular.module('omdbMovieApp')
  .controller('MoviesController', ['$scope', 'movieDataService', MoviesController])
  .directive('movies', MoviesDirective);

    function MoviesController ($scope, movieDataService) {
        var vm = this;
        vm.data = {};
        vm.data.movies = movieDataService.movies;
    }

    function MoviesDirective () {
      return {
          restrict: 'E',
          templateUrl: '/directives/movies/movies.html',
          controller: 'MoviesController as MoviesCtrl',
          bindToController: true
      };
    }
