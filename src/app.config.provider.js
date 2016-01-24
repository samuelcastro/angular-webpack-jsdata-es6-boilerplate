/**
 * Firebase Provider
 * @description As we are using webpack to build our app, js-data-angular can't find js-data-firebase, so let's create it.
 * @moreInfo https://github.com/js-data/js-data-firebase/issues/21
 * @author Samuel Castro
 * @since 1/18/16
 */

'use strict';

import jsDataFirebase from 'js-data-firebase';

export default function () {
  this.defaults = {};
  this.$get = () => new jsDataFirebase(this.defaults)
};

