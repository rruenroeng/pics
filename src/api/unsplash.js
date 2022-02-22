import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6f4917baedc43c0564c8d6967d5e3ec198c32562370ff1c7303ae5c3a3bdb520",
  },
});
