import axios from "axios";

const API_URL = "http://localhost:5000/youtubeChannels";

export const getChannels = () => axios.get(API_URL);
export const addChannel = (data) => axios.post(API_URL, data);
export const deleteChannel = (id) => axios.delete(`${API_URL}/${id}`);
export const updateChannel = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);
export const getChannelById = (id) =>
  axios.get(`${API_URL}/${id}`);