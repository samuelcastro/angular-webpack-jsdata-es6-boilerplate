'use strict';

class DashboardController {
  constructor($scope, $mdSidenav, $mdBottomSheet, User) {
    this.$scope = $scope;
    this.$mdSidenav = $mdSidenav;
    this.$mdBottomSheet = $mdBottomSheet;
    this.User = User.getInstance();
    this.selected = null;

    this.findAll();
    this.User.bindAll({}, this.$scope, 'dashboard.users');
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  selectUser (user) {
    this.selected = user;
    this.toggleList();
  }

  /**
   * Hide or Show the 'left' sideNav area
   */
  toggleList() {
    this.$mdSidenav('left').toggle();
  }

  addUser() {
    this.User.create(
        {
          name: 'Samuel Castro',
          email: 'samuelcastrosilva@gmail.com',
          avatar: 'svg-1'

        }
    ).then(document => {
      alert(JSON.stringify(document));
    });
  }

  findAll() {
    this.User.findAll().then(
        users => {
          this.selected = users[0];
        }
    )
  }

  /**
   * Show the bottom sheet
   */
  share($event) {
    var user = this.selected;

    this.$mdBottomSheet.show({
      parent: angular.element(document.getElementById('content')),
      template: require('./actions.html'),
      controller: [ '$mdBottomSheet', UserSheetController],
      controllerAs: "vm",
      bindToController : true,
      targetEvent: $event
    }).then(function(clickedItem) {
      console.log( clickedItem.name + ' clicked!');
    });

    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    function UserSheetController( $mdBottomSheet ) {

      this.user = user;
      this.items = [
        { name: 'Edit'     , icon: 'edit'       , icon_url: require('./assets/svg/phone.svg')},
        { name: 'Remove'   , icon: 'remove' , icon_url: require('./assets/svg/google_plus.svg')},
      ];
      this.performAction = function(action) {
        $mdBottomSheet.hide(action);
      };

    }
  }
}

DashboardController.$inject = ['$scope', '$mdSidenav', '$mdBottomSheet', 'User'];

export default DashboardController
