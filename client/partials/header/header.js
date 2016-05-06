angular.module('omdbMovieApp')
    .controller('HeaderCtrl',function($scope, movieDataService){
        $scope.vs = $scope.vs || {};

        $scope.vs.filterFavorites = function (data) {
            if (!$scope.vs.favorites) return true;
            return data.favorite;
        }

        $scope.newPost = function () {
            var newPost = angular.copy($scope.post);

            if ($scope.form.$valid) {
              movieService.getMovie(newPost.title).then(function(res){
                $scope.post = {};
                $scope.form.$setPristine();
                $scope.form.$setUntouched();
                movieService.addPost(res.data);
              });
            }

            // Hide form
            $scope.vs.TogglePostForm = false;
        }

  });
