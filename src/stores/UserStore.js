import { observable, decorate } from "mobx";

class UserStore {
  // @observable currentUser = null
  currentUser = null;

  changeCurrentUser(user) {
    this.currentUser = user;
  }

  // constructor(rootStore) {
  //   this.rootStore = rootStore;
  // }
}

decorate(UserStore, {
  currentUser: observable
});

export default UserStore;
