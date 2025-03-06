import axios from "axios";

const API_URL = "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs";

export const fetchBlogs = async () => {
    const response = await axios.get(API_URL);
    return response.data; // Returns full dataset
  };