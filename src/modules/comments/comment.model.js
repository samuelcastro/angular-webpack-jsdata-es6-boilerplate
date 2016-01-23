'use strict';

import angular from 'angular';

class Comment {
  constructor(DS) {
    this.DS = DS;
  }

  getInstance() {
    return this.DS.defineResource({
      name: 'comment',
      endpoint: 'comments',
      relations: {
        belongsTo: {
          user: {
            localField: 'user',
            localKey: 'owner_id'
          },
          post: {
            localField: 'post',
            localKey: 'post_id'
          }
        }
      }
    });
  }
}

Comment.$inject = ['DS'];

export default angular.module('app.comment.model', [])
    .run(Comment => {})
    .service('Comment', Comment)
    .name;
