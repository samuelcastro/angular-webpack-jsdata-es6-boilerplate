'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './post.routes';
import postController from './post.controller';
import postModel from './post.model';

export default angular.module('app.post', [uirouter, postModel])
  .config(routing)
  .controller('PostController', postController)
  .name;
