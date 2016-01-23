'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/',
      template: require('./dashboard.html'),
      controller: 'DashboardController',
      controllerAs: 'dashboard'
    });
}
