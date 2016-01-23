'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './style.css';

import routing from './user.routes';
import userController from './user.controller';
import userModel from './user.model';

export default angular.module('app.user', [uirouter, userModel])
  .config(routing)
  .controller('UsersController', userController)
  .name;
