'use strict';

/**
 * Comment class
 * @description Building the Comment model class
 * @author Samuel Castro
 * @since 1/18/16
 */

import angular from 'angular';

class Comment {
  constructor(DS) {
    this.DS = DS;
    this.instance = null;
  }

  /**
   * Getting a singleton instance of Comment
   * @returns {*}
   */
  getInstance() {
    if(this.instance && this.instance.class === 'Comment') {
      return this.instance;
    } else {
      return this.instance = this.DS.defineResource({
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
}

Comment.$inject = ['DS'];

export default angular.module('app.comment.model', [])
    .run(Comment => {})
    .service('Comment', Comment)
    .name;
