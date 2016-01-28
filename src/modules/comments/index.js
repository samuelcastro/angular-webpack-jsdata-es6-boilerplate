'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './comment.routes';
import CommentController from './comment.controller';
import commentModel from './comment.model';

export default angular.module('app.comment', [uirouter, commentModel])
  .config(routing)
  .controller('CommentController', CommentController)
  .name;
