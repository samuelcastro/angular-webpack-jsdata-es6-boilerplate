/**
 * Configuring the necessary resources
 * @author Samuel Castro
 * @since 1/18/16
 */

'use strict';

run.$inject = ['DS', 'DSFirebaseAdapter'];

export default function run(DS, DSFirebaseAdapter) {

    /**
     * Every thing ok, let's set our adapter as default
     */
    DS.registerAdapter('firebase', DSFirebaseAdapter, { default: true });
}
