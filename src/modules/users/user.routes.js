'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('users', {
      url: '/usersxx',
      template: require('./user.html'),
      controller: 'UserController',
      controllerAs: 'user'
    });
}
