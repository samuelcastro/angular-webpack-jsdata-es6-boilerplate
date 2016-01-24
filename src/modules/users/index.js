'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './style.css';

import routing from './user.routes';
import userController from './user.controller';
import userModel from './user.model';

const URL_AVATAR_ICONS = './assets/svg/avatars.svg';
const URL_ICON_MENU    = './assets/svg/menu.svg';
const URL_ICON_SHARE   = './assets/svg/share.svg';

export default angular.module('app.user', [uirouter, userModel])
  .config(routing)
    .config(
        $mdIconProvider => {

            // Register `dashboard` iconset & icons for $mdIcon service lookups

            $mdIconProvider
                .defaultIconSet( URL_AVATAR_ICONS, 128 )
                .icon('menu' ,URL_ICON_MENU, 24)
                .icon('share',URL_ICON_SHARE, 24);

        }
    )
  .controller('UsersController', userController)
  .name;
