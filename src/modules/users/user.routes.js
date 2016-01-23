'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./dashboard.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}
