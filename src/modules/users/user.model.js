'use strict';

import angular from 'angular';

class User {
  constructor($rootScope, DS, DSHttpAdapter, $q) {
    this.$rootScope = $rootScope;
    this.DS = DS;
    this.DSHttpAdapter = DSHttpAdapter;
    this.$q = $q;
    this.instance = null;
  }

  getInstance() {
    if(this.instance && this.instance.class === 'User') {
      return this.instance;
    } else {
      return this.instance = this.DS.defineResource({
        name: 'user',
        endpoint: 'users',
        relations: {
          hasMany: {
            post: {
              localField: 'posts',
              foreignKey: 'owner_id'
            },
            comment: {
              localField: 'comments',
              foreignKey: 'owner_id'
            }
          }
        },

        // Static Methods
        getLoggedInUser: () => {
          var deferred = this.$q.defer();

          if (this.$rootScope.loggedInUser) {
            deferred.resolve(this.$rootScope.loggedInUser);
          } else {
            this.DSHttpAdapter.GET('/api/users/loggedInUser').then(function (response) {
              var user = response.data;
              if (user) {
                user = User.createInstance(user);
                this.$rootScope.loggedInUser = user;
                this.$rootScope.loggedIn = true;
                this.$rootScope.loggedInUserId = user.id;
                User.inject($rootScope.loggedInUser);
                return deferred.resolve(user);
              } else {
                this.$rootScope.loggedInUser = null;
                this.$rootScope.loggedIn = false;
                this.$rootScope.loggedInUserId = null;
                return deferred.resolve(null);
              }
            }, function (data) {
              if (data.status === 401) {
                return deferred.resolve(null);
              } else {
                return deferred.reject(data);
              }
            });
          }

          return deferred.promise;
        }
      });
    }
  }
}

User.$inject = ['$rootScope', 'DS', 'DSHttpAdapter', '$q'];

export default angular.module('app.user.model', [])
    .run(function (User) {})
    .service('User', User)
    .name;
