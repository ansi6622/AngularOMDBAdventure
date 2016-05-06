angular.module('omdbMovieApp', ['ui.router','ngAnimate']);

angular.module('omdbMovieApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
          url: '/',
          views: {
              'header': {
                templateUrl: 'partials/header/header.html',
                controller: 'HeaderCtrl'
              },
              'posts': {
                template: '<posts />'
              }
          }
        })
        .state('404', {
          url: '/404',
          views: {
              'body': {
                  template: 'Ohhh nooooz! fo0fo. You must be lost. <a ui-sref="home">Go home!</a>'
              }
          }
        });

});

angular.module('omdbMovieApp').run(function($rootScope){
  $rootScope.safeApply = function(fn){
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest'){
      if(fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };
});
