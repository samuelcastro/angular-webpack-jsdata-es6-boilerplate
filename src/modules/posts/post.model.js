'use strict';

/**
 * Post class
 * @description Building the Post model class
 * @author Samuel Castro
 * @since 1/18/16
 */

import angular from 'angular';

class Post {
  constructor(DS) {
    this.DS = DS;
    this.instance = null;
  }

  /**
   * Getting a singleton instance of Post
   * @returns {*}
   */
  getInstance() {
    if(this.instance && this.instance.class === 'Post') {
      return this.instance;
    } else {
      return this.instance = DS.defineResource({
        name: 'post',
        endpoint: 'posts',
        relations: {
          belongsTo: {
            user: {
              localField: 'user',
              localKey: 'owner_id'
            }
          }
        }
      });
    }
  }
}

Post.$inject = ['DS'];

export default angular.module('app.post.model', [])
    .run(Post => {})
    .service('Post', Post)
    .name;

