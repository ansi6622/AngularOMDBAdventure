angular.module('omdbMovieApp')
    .controller('VoteController', ['$scope', 'movieDataService', VoteController])
    .directive('rcVote', VoteDirective);

function VoteDirective() {
    return {
        restrict: 'E',
        scope: {
            movie: '='
        },
        templateUrl: 'directives/vote/vote.html',
        controller: 'VoteController as VoteCtrl',
        bindToController: true
    };
}

function VoteController($scope, movieDataService) {
    $scope.fn = {};

    $scope.fn.upVote = function(movieId) {
        var movie = movieDataService.movieById(movieId);
        ++movie.votes;
    };

    $scope.fn.downVote = function(movieId) {
        var movie = movieDataService.movieById(movieId);
        --movie.votes;
    };
}
