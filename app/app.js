(function () {

  'use strict';

  angular
    .module('app', ['auth0.auth0', 'angular-jwt', 'ui.router'])
    .config(config);

  config.$inject = [
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    '$httpProvider',
    'angularAuth0Provider',
    'jwtOptionsProvider'
  ];

  function config(
    $stateProvider,
    $locationProvider,
    $urlRouterProvider,
    $httpProvider,
    angularAuth0Provider,
    jwtOptionsProvider
  ) {

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeController',
        templateUrl: 'app/home/home.html',
        controllerAs: 'vm'
      })
      .state('user', {
        url: '/profile',
        controller: 'ProfileController',
        templateUrl: 'app/profile/profile.html',
        controllerAs: 'vm'
      })
      .state('orderpizza', {
        url: '/ping',
        controller: 'PingController',
        templateUrl: 'app/ping/ping.html',
        controllerAs: 'vm'
      })
      .state('callback', {
        url: '/callback',
        controller: 'CallbackController',
        templateUrl: 'app/callback/callback.html',
        controllerAs: 'vm'
      });

    // Initialization for the angular-auth0 library
    angularAuth0Provider.init({
      clientID: AUTH0_CLIENT_ID,
      domain: AUTH0_DOMAIN,
      responseType: 'token id_token',
      audience: AUTH0_AUDIENCE,
      redirectUri: AUTH0_CALLBACK_URL,
      scope: 'openid profile read:messages email read:user_idp_tokens  read:users'
    });

    jwtOptionsProvider.config({
      tokenGetter: function() {
        return localStorage.getItem('access_token');
      },
      whiteListedDomains: ['localhost','ec2-13-58-4-177.us-east-2.compute.amazonaws.com']
    });

    $httpProvider.interceptors.push('jwtInterceptor');

    $urlRouterProvider.otherwise('/');

    $locationProvider.hashPrefix('');

    // Comment out the line below to run the app
    // without HTML5 mode (will use hashes in routes)
    $locationProvider.html5Mode(true);
  }

})();
