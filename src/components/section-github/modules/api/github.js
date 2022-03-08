import { QUERY } from "./query.js";

function getViewerRepository(apiUrl, apiToken) {
  return new Promise(function (resolve, reject) {
    const HTTP = new XMLHttpRequest();

    HTTP.open('POST', apiUrl);
    HTTP.setRequestHeader('Authorization', 'Bearer ' + apiToken);
    HTTP.setRequestHeader('Content-Type', 'application/json');

    HTTP.onload = function () {
      if (HTTP.status === 200) {
        const responseJSON = JSON.parse(HTTP.responseText);

        resolve(responseJSON);
      }
    };

    HTTP.onerror = function () {
      reject(new Error('GraphQL network error occured.'));
    };

    HTTP.send(JSON.stringify(QUERY));
  });
};

export {
  getViewerRepository
};