import axios from "axios";
import api from "../../../../services/api";

// export const LOGIN_URL = "api/auth/login";
// export const REGISTER_URL = "api/auth/register";
// export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";
// export const ME_URL = "api/me";

export const LOGIN_URL = "/sessions";
export const REGISTER_URL = "/users";
export const REQUEST_PASSWORD_URL = "/password/forgot";
export const ME_URL = "/sessions/auth";

export function login(email, password) {
  return api.post(LOGIN_URL, { email, password });
}

export function register(email, fullname, username, password) {
  return api.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return api.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return api.post(ME_URL);
}
