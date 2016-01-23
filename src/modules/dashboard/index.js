'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './style.css';

import routing from './dashboard.routes';
import DashboardController from './dashboard.controller';

import users from '../users/index';
import posts from '../posts/index';
import comments from '../comments/index';

export default angular.module('app.home', [uirouter, users, posts, comments])
  .config(routing)
  .controller('DashboardController', DashboardController)
  .name;
