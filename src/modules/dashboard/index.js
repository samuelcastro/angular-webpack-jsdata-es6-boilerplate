'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './style.css';

import routing from './dashboard.routes';
import DashboardController from './dashboard.controller';

export default angular.module('app.home', [uirouter])
  .config(routing)
  .controller('DashboardController', DashboardController)
  .name;
