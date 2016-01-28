'use strict';

class DashboardController {
  constructor($scope, $mdSidenav, $mdBottomSheet, $mdDialog, User) {
    this.$scope = $scope;
    this.$mdSidenav = $mdSidenav;
    this.$mdBottomSheet = $mdBottomSheet;
    this.$mdDialog = $mdDialog;
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
    );
  }

  /**
   * Show the bottom sheet
   */
  share($event) {
    var user = this.selected;

    this.$mdBottomSheet.show({
      parent: angular.element(document.getElementById('content')),
      template: require('./components/actions.tmpl.html'),
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
        { name: 'Edit'     , icon: 'edit'   , icon_url: require('./assets/svg/phone.svg')},
        { name: 'Remove'   , icon: 'remove' , icon_url: require('./assets/svg/google_plus.svg')},
      ];
      this.performAction = function(action) {
        $mdBottomSheet.hide(action);
      };
    }
  }

  showTabDialog(ev) {
    this.$mdDialog.show({
          controller: DialogController,
          controllerAs: "vm",
          locals: {
            User: this.User
          },
          template: require('./components/tabDialog.tmpl.html'),
          parent: angular.element(document.body),
          bindToController : true,
          targetEvent: ev,
          clickOutsideToClose:true
        })
        .then(function(answer) {
          //$scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          //$scope.status = 'You cancelled the dialog.';
        });

    /**
     * Dialog controller
     * @param $scope
     * @param $mdDialog
     * @constructor
     */
    function DialogController($mdDialog, User) {
      this.user = {};
      this.label = 'Save';

      this.User = User;

      this.hide = () => {
        $mdDialog.hide();
      };

      this.cancel = () => {
        $mdDialog.cancel();
      };

      this.save = () => {
        console.log(this.form);
        if(this.form.$valid) {
          this.form.$setSubmitted();
          this.label = 'Saving...';
          User.create(
              {
                name: this.user.name,
                email: this.user.email,
                description: this.user.description,
                avatar: 'svg-' + Math.floor((Math.random() * 16) + 1)
              }
          ).then(document => {
            if(document) {
              this.hide();
            }
          });
        }
      };
    }
  };
}

DashboardController.$inject = ['$scope', '$mdSidenav', '$mdBottomSheet', '$mdDialog', 'User'];

export default DashboardController
