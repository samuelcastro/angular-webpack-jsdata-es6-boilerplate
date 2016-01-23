'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('posts', {
      url: '/posts',
      template: require('./post.html'),
      controller: 'PostController',
      controllerAs: 'post'
    });
}
