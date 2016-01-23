//angular.module('app').factory('Post', function (DS) {
//  return DS.defineResource({
//    name: 'post',
//    endpoint: 'posts',
//    relations: {
//      belongsTo: {
//        user: {
//          localField: 'user',
//          localKey: 'owner_id'
//        }
//      }
//    }
//  });
//}).run(function (Post) {
//});

'use strict';

import angular from 'angular';

class Post {
  constructor(DS) {
    this.DS = DS;
  }

  getInstance() {
    return DS.defineResource({
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

Comment.$inject = ['DS'];

export default angular.module('app.post', [])
    .run(Post => {})
    .service('Post', Post)
    .name;

