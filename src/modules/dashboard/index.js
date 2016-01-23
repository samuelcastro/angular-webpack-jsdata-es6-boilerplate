'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './style.css';

import routing from './dashboard.routes';
import DashboardController from './dashboard.controller';
import wordsService from '../../services/words.service';
import authService from '../../services/auth.service';

export default angular.module('app.home', [uirouter, wordsService, authService])
  .config(routing)
  .controller('DashboardController', DashboardController)
  .name;
