import axios from "axios";

const url = "https://caret-qr-code-generator.herokuapp.com/get-image";

export const generateQR = async (data) => {
  const response = await axios.post(url, { data });
  return response.data;
};
