'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './style.css';

import routing from './comment.routes';
import CommentController from './comment.controller';
import commentModel from './comment.model';
import wordsService from '../../services/words.service';
import authService from '../../services/auth.service';

export default angular.module('app.comment', [uirouter, wordsService, authService, commentModel])
  .config(routing)
  .controller('CommentController', CommentController)
  .name;
