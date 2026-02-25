import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getChannels = () => API.get("/youtubeChannels");
export const addChannel = (data) => API.post("/youtubeChannels", data);
export const updateChannel = (id, data) =>
  API.put(`/youtubeChannels/${id}`, data);
export const deleteChannel = (id) =>
  API.delete(`/youtubeChannels/${id}`);