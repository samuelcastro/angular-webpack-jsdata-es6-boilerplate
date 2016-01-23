'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('comments', {
      url: '/comments',
      template: require('./comment.html'),
      controller: 'CommentController',
      controllerAs: 'comment'
    });
}
