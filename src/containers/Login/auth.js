
import decode from "jwt-decode";
import axios from "axios";
class Auth {
  async checkLogin() {
    const access = this.getToken("access");
    const refresh = this.getToken("refresh");

    if (this.isTokenExpired(access)) {
      if (this.isTokenExpired(refresh)) {
        return null;
      } else {
        const newAccess = await this.getNewAccessToken(refresh);
        return newAccess;
      }
    } else {
      return access;
    }
  }
  checkHasConfirmed() {
    return decode(localStorage.getItem("access")).has_confirmed;
  }
  async getNewAccessToken(refresh) {
    const formData = JSON.stringify({
        "refresh": refresh,
    })
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_URL + "/api/u/auth/jwt/create/" ,
        formData
      );

      this.setAccessToken(data.access);
      return data.access;
   } catch (e) {console.error(e)}
  }

  isTokenExpired(token) {
    if (token === "" || !token) return true;
    try {
      const raw_data = atob(token.split(".")[1]);
      const decoded = JSON.parse(String(raw_data));

      let out = decoded.exp ? decoded.exp < Date.now() / 1000 : false;

      return out;
    } catch (err) {
      return false;
    }
  }

  getToken(key) {
    return localStorage.getItem(key);
  }

  login(key, token) {
    // Saves user token to localStorage
    localStorage.setItem(key, token);
    // reloads the page
    // window.location.assign('/');
  }

  setRefreshToken(ref) {
    localStorage.setItem("refresh", ref);
  }
  setAccessToken(acc) {
    localStorage.setItem("access", acc);
  }
  logout() {
    this.setAccessToken("");
    this.setRefreshToken("");
    localStorage.clear()
    window.location.reload();
  }
}

const auth = new Auth();

export default auth;