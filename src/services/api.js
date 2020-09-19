import axios from "axios";

const api = axios.create({
  baseURL: "https://investsoftapi.herokuapp.com",

});
export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDA0NTU2NDksImV4cCI6MTYwMDU0MjA0OSwic3ViIjoiODBkZDg4ZDktN2M5Ny00YWRiLTk0NzEtMDI0MmYyNTU1NDE2In0.fbrnb2Z9G2od6p3DHa4Bf9H8Xrw8-EjbD8mn1puGp3k";

export default api;