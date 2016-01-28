/**
 * AngularJS boilerplate based on Webpack + ES6 + JSData + SASS
 * @description
 * @author Samuel Castro
 * @since 1/18/16
 */

'use strict';
import 'angular-material/angular-material.scss';

import angular         from 'angular';
import angularMaterial from 'angular-material'
import uirouter        from 'angular-ui-router';

import firebase        from 'firebase';
import jsData          from 'js-data';
import jsDataFirebase  from 'js-data-firebase';
import jsDataAngular   from 'js-data-angular'

import adapters        from './app.config.adapters';
import provider        from './app.config.provider';
import run             from './app.config.run';
import routing         from './app.config.routing';

export default angular.module('app.config', [angularMaterial, uirouter, jsDataAngular])
    .provider('DSFirebaseAdapter', provider)
    .config(adapters)
    .config(routing)
    .run(run)
    .name;

