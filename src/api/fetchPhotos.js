import axios from "axios";

export const fetchPhotos = async () => {
    try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}photos?_start=${process.env.REACT_APP_START}&_limit=${process.env.REACT_APP_LIMIT}`
        );
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}