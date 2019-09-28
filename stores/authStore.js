import { decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";
import profileStore from "./profileStore";

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user
      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("/login/", userData);
      const user = res.data;
      this.setUser(user.access);

      navigation.replace("BanakList");
    } catch (err) {
      console.log("something went wrong logging in");
      // alert( message?: "Did you register, N00b?")
    }
  };

  logout = () => {
    this.setUser();
  };

  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/register/", userData);
      const user = res.data;
      this.setUser(user.access);
      navigation.replace("BanakList");
    } catch (err) {
      console.error(err);
    }
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
