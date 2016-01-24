/**
 * JSData Adapter
 * @description Configuring the JSData Adapter
 * @author Samuel Castro
 * @since 1/18/16
 */

'use strict';

adapters.$inject = ['DSFirebaseAdapterProvider'];

export default function adapters(DSFirebaseAdapterProvider) {
  DSFirebaseAdapterProvider.defaults.basePath = 'https://samuelcastro.firebaseio.com';
}
