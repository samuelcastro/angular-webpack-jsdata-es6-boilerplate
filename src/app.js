/**
 * AngularJS boilerplate based on Webpack + ES6 + JSData + SASS
 * @description
 * @author Samuel Castro
 * @since 1/18/16
 */

'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'firebase';
import jsData from 'js-data';
import jsDataFirebase from 'js-data-firebase';
import jsDataAngular from 'js-data-angular'

import dashboard from './modules/dashboard/index';

import adapters from './app.adapters.config';
import provider from './app.provider.config';
import run from './app.run.config';
import routing from './app.routing.config';

angular.module('app', [uirouter, jsDataAngular, dashboard, login, models])
    .provider('DSFirebaseAdapter', provider)
    .config(adapters)
    .config(routing)
    .run(run);

