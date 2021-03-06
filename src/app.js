
/**
 * AngularJS boilerplate based on Webpack + ES6 + JSData + SASS + Material Design
 * @author Samuel Castro
 * @since 1/18/16
 */

'use strict';

import angular   from 'angular';
import config    from './config/app.config'
import dashboard from './modules/dashboard/index';

/**
 * Manually bootstrap the application when AngularJS and all modules has been loaded.
 */
angular
    .element( document )
    .ready( () => {

      let appName = 'app';
      let body = document.getElementsByTagName("body")[0];
      let app  = angular
          .module( appName, [ config, dashboard ] ).name;

      angular.bootstrap( body, [ app ], { strictDi: false })

    });
