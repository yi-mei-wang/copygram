import { observable, decorate } from "mobx";

class LoadingStore {
  // @observable currentUser = null
  currentUser = null;
  isLoading = true;

  changeCurrentUser(user) {
    this.currentUser = user;
  }
}

decorate(LoadingStore, {
  currentUser: observable
});

const loadingStore = new LoadingStore();

export default loadingStore;
