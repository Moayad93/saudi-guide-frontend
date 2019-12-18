let apiUrl;
const expressPort = 3000;
const apiUrls = {
  production: "http://fierce-sea-75816.herokuapp.com",
  development: `http://127.0.0.1:${expressPort}`
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;