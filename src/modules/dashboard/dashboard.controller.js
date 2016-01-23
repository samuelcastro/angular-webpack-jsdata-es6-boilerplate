'use strict';

class DashboardController {
  constructor($scope, User) {
    this.$scope = $scope;
    this.User = User.getInstance();

    this.findAll();

    this.User.bindAll({}, this.$scope, 'dashboard.users');
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

DashboardController.$inject = ['$scope', 'User'];

export default DashboardController
