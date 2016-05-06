angular.module('omdbMovieApp')
    .controller('HeaderCtrl',function($scope, movieDataService){
        $scope.vs = $scope.vs || {};

        $scope.vs.filterFavorites = function (data) {
            if (!$scope.vs.favorites) return true;
            return data.favorite;
        }

        $scope.newMovie = function () {
            var newMovie = angular.copy($scope.movie);

            if ($scope.form.$valid) {
              movieDataService.getMovie(newMovie.title).then(function(res){
                $scope.movie = {};
                $scope.form.$setPristine();
                $scope.form.$setUntouched();
                movieDataService.addMovie(res.data);
              });
            }

            // Hide form
            $scope.vs.ToggleMovieForm = false;
        }

  });
