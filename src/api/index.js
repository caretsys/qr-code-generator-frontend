import axios from "axios";

const url = "https://caret-qr-code-generator.herokuapp.com/get-image";

export const generateQR = async (input) => {
  const body = new FormData();
  body.append("userData", input);
  const response = await axios({
    method: "post",
    headers: { "Content-Type": "multipart/form-data" },
    url: url,
    data: body,
    responseType: "blob",
  });
  const responseBlob = new Blob([response.data], { type: "image/png" });
  const reader = new window.FileReader();
  reader.readAsDataURL(responseBlob);
  return reader;
};

/**
 * var responseBlob = new Blob([response.data], {type:"image/png"}); 
    var reader = new window.FileReader();
    reader.readAsDataURL(responseBlob); 
    reader.onload = function() {
      var imageDataUrl = reader.result;
      $("#selected-image").attr("src", imageDataUrl)
 */
