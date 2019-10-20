import { observable, decorate } from "mobx";

class UserStore {
  // @observable currentUser = null
  currentUser = null;
  users = [];

  changeCurrentUser(user) {
    this.currentUser = user;
  }

  setUsers(users) {
    this.users = [...users];
  }

  // constructor(rootStore) {
  //   this.rootStore = rootStore;
  // }
}

decorate(UserStore, {
  currentUser: observable
});

export default UserStore;
