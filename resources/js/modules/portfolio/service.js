import * as Http from '../../utils/http';

export function fetchSections(params = {}) {
  return new Promise((resolve, reject) => {
    let queryString = Object.entries(params).map(e => e.join('=')).join('&');

    Http.get(`/portfolio?${queryString}`)
        .then(res => {
          if (!res.ok) {
            const data = {
              text: res.statusText,
              statusCode: res.status
            };
            return reject(data);
          }
          return res.json();
        })
        .then(res => resolve(res))
        .catch((err) => {
          const data = {
            text: null,
            statusCode: err.response.status,
          };
          return reject(data);
        });
  });
}

export function fetchSection(section, params = {}) {
  return new Promise((resolve, reject) => {
    Http.get(`/portfolio/${section}`)
        .then(res => {
          if (!res.ok) {
            const data = {
              text: res.statusText,
              statusCode: res.status
            };
            return reject(data);
          }
          return res.json();
        })
        .then(res => resolve(res))
        .catch((err) => {
          const data = {
            text: null,
            statusCode: err.response.status,
          };
          return reject(data);
        });
  });
}

export function saveSection(section, data = {}) {
  return new Promise((resolve, reject) => {
    Http.put(`/portfolio/${section}`, data)
        .then(res => {
          if (!res.ok) {
            const data = {
              text: res.statusText,
              statusCode: res.status
            };
            return reject(data);
          }
          return res.json();
        })
        .then(res => {
          return resolve(res);
        })
        .catch((err) => {
          const data = {
            text: null,
            statusCode: err.response.status,
          };
          return reject(data);
        });
  });
}
