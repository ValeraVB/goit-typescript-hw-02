import axios from "axios";
import { Image as ImageType } from "../App.types";

const ACCESS_KEY = "uBHHAHEPAGwf4fc5A3IjyZygHsbZ6wg2KAF9Ns3bOMs";
const API_URL = "https://api.unsplash.com/search/photos";

interface UnsplashResponse {
  results: ImageType[];
}

const unsplashService = {
  fetchImages: async (
    query: string,
    page: number = 1
  ): Promise<UnsplashResponse> => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          query,
          page,
          per_page: 12,
          client_id: ACCESS_KEY,
        },
      });
      return response.data;
    } catch (error: any) {
      throw new Error("Error fetching images: " + error.message);
    }
  },
};

export default unsplashService;
