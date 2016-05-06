angular.module('omdbMovieApp').directive('comment', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/directives/comment/comment.html',
        link: function(scope, element, attrs, fn) {
            scope.comments = scope.movie.comments;
        },
        controller: function ($scope, $timeout, movieDataService) {
            $scope.vs = {};

            // ViewState Object
            $scope.vs.form = false;
            $scope.vs.comments = false;

            $scope.addComment = function (movieId, formComment) {
                var movie = movieDataService.movieById(movieId);
                var commentCopy = angular.copy(formComment);
                movie.comments.push(commentCopy);
                $scope.form.$setPristine();
                $scope.form.$setUntouched();
                $scope.comment = {};
                $scope.vs.form = false;
                $scope.vs.comments = true;
            };
        }
    };
});
