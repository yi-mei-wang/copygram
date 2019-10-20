import { observable, decorate } from "mobx";

class UserStore {
  // @observable currentUser = null
  currentUser = null;
  users = [];

  setCurrentUser = user => {
    this.currentUser = user;
  };

  setUsers = users => {
    this.users = [...users];
  };

  // constructor(rootStore) {
  //   this.rootStore = rootStore;
  // }
}

decorate(UserStore, {
  currentUser: observable,
  users: observable,
  setCurrentUser: observable,
  setUsers: observable
});

export default UserStore;
