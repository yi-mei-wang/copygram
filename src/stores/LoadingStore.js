import { observable, decorate } from "mobx";

class LoadingStore {
  // @observable currentUser = null
  isLoading = true;

  setIsLoading(bool) {
    console.log("works bitch");
    this.isLoading = bool;
  }

  // constructor(rootStore) {
  //   this.rootStore = rootStore;
  // }
}

decorate(LoadingStore, {
  isLoading: observable
});

export default LoadingStore;
