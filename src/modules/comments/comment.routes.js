'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./comment.html'),
      controller: 'CommentController',
      controllerAs: 'comment'
    });
}
