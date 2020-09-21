import api from "../services/api";

export default function setupAxios(axios, store) {
  api.interceptors.request.use(
    (config) => {
      const {
        auth: { token },
      } = store.getState();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;

        // api.defaults.headers.authorization = `Bearer ${token}`;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );
}
