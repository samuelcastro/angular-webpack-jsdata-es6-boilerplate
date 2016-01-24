'use strict';

class DashboardController {
  constructor($scope, $mdSidenav, User) {
    this.$scope = $scope;
    this.$mdSidenav = $mdSidenav;
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

  getTitle() {
    return this.getTitle2();
  }

  getTitle2() {

    return 'Users'
  }

  addUser() {
    this.User.create(
        {
          id: Math.floor((Math.random() * 1000) + 1),
          name: 'Samuel Castro',
          last_name: 'Silva Test',
          email: 'samuelcastrosilva@gmail.com'
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

  getRandomWord() {
    this.wordsSvc.getWords().then((res) => {
      this.word = res.data;
    });
  }

  logout(event) {
    event.preventDefault();
    this.authSvc.logout();
    this.isAuth = false;
    this.user = null;
  }
}

DashboardController.$inject = ['$scope', '$mdSidenav', 'User'];

export default DashboardController
