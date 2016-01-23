'use strict';

class PostController {
  constructor($scope, User) {
    this.$scope = $scope;
    this.User = User.getInstance();

    this.User.findAll().then(
        users => {
          console.log(users);
        }
    );

    this.User.bindAll({}, this.$scope, 'home.users');
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
          alert(JSON.stringify(users));
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

PostController.$inject = ['$scope', 'User'];

export default PostController
