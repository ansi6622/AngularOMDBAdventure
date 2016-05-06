angular.module('omdbMovieApp').directive('comment', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/directives/comment/comment.html',
        link: function(scope, element, attrs, fn) {
            scope.comments = scope.post.comments;
        },
        controller: function ($scope, $timeout, movieDataService) {
            $scope.vs = {};

            // ViewState Object
            $scope.vs.form = false;
            $scope.vs.comments = false;

            $scope.addComment = function (movieId, formComment) {
                var post = movieDataService.movieById(movieId);
                var commentCopy = angular.copy(formComment);
                post.comments.push(commentCopy);
                $scope.form.$setPristine();
                $scope.form.$setUntouched();
                $scope.comment = {};
                $scope.vs.form = false;
                $scope.vs.comments = true;
            };
        }
    };
});
