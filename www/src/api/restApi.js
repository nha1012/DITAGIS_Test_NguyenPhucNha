import axios from "axios";

const baseUrlApi = "https://5f7533ce1cf3c900161cdd9e.mockapi.io/";

export const getProduct = (_) => {
  const path = "product";
  return axios({
    method: "get",
    url: baseUrlApi + path,
  });
};
export const postProduct = (item) => {
  const path = "product";
  return axios({
    method: "post",
    url: baseUrlApi + path,
    body: item,
  });
};
