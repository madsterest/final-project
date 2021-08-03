import decode from "jwt-decode";

class AuthService {
  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
