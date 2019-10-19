import { observable, decorate } from "mobx";

class UserStore {
  // @observable currentUser = null
  currentUser = null;

  changeCurrentUser(user) {
    this.currentUser = user;
  }
}

decorate(UserStore, {
  currentUser: observable
});

const userStore = new UserStore();

export default userStore;
