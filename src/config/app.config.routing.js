/**
 * App Main Routing
 * @description Defining the main app routes
 * @author Samuel Castro
 * @since 1/18/16
 */

'use strict';

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
