import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c180253f32e740c0bae9137d5c195c64",
  },
});
