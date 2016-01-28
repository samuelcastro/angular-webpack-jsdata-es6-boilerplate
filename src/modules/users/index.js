'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './user.scss';

import routing from './user.routes';
import userController from './user.controller';
import userModel from './user.model';

const URL_AVATAR_ICONS = require('./assets/svg/avatars.svg');
const URL_ICON_MENU    = require('./assets/svg/menu.svg');
const URL_ICON_SHARE   = require('./assets/svg/share.svg');
const URL_ICON_ACTION  = require('./assets/svg/action.svg');
const URL_ICON_EDIT    = require('./assets/svg/edit.svg');
const URL_ICON_REMOVE  = require('./assets/svg/remove.svg');
const URL_ICON_USER_ADD  = require('./assets/svg/user_add.svg');
const URL_ICON_ADD  = require('./assets/svg/add.svg');
const URL_ICON_PERSON  = require('./assets/svg/ic_person_24px.svg');
const URL_ICON_EMAIL  = require('./assets/svg/ic_mail_24px.svg');
const URL_ICON_DESCRIPTION  = require('./assets/svg/ic_insert_comment_24px.svg');

export default angular.module('app.user', [uirouter, userModel])
  .config(routing)
    .config(
        $mdIconProvider => {

            // Register `dashboard` iconset & icons for $mdIcon service lookups

            $mdIconProvider
                .defaultIconSet( URL_AVATAR_ICONS, 128 )
                .icon('menu' , URL_ICON_MENU, 24)
                .icon('share', URL_ICON_SHARE, 24)
                .icon('action', URL_ICON_ACTION, 24)
                .icon('edit', URL_ICON_EDIT, 24)
                .icon('remove', URL_ICON_REMOVE, 24)
                .icon('user_add', URL_ICON_USER_ADD, 24)
                .icon('add', URL_ICON_ADD, 36)
                .icon('person', URL_ICON_PERSON, 24)
                .icon('email', URL_ICON_EMAIL, 24)
                .icon('description', URL_ICON_DESCRIPTION, 24);
        }
    )
  .controller('UsersController', userController)
  .name;
