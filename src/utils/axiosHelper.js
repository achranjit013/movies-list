import axios from "axios";

const apiURL = "https://www.omdbapi.com/?apikey=ad76a1e9&t=";
export const fetchMovie = async (str) => {
  // promise
  // axios.get(apiURL).then((response) => {
  //   console.log(response);
  // });

  // async/await
  try {
    const response = await axios.get(apiURL + str);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
