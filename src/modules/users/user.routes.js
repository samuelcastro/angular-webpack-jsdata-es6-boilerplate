'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('users', {
      url: '/',
      template: require('./user.html'),
      controller: 'UserController',
      controllerAs: 'user'
    });
}
