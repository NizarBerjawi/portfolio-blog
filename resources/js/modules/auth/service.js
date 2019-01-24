import * as Http from '../../utils/http';

// Log the user in to the application
export function login(credentials) {
  return new Promise((resolve, reject) => {
    Http.post('/auth/login', credentials)
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
          localStorage.setItem('access_token', res.access_token);
          sessionStorage.setItem('is_authenticated', true);
          return resolve();
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

// Log the user out
export function logout() {
  return new Promise((resolve, reject) => {
    Http.post('/auth/logout')
        .then(res => {
          if (!res.ok) {
            const data = {
              text: res.statusText,
              statusCode: res.status
            };
            return reject(data);
          }

          localStorage.removeItem('access_token');
          sessionStorage.removeItem('is_authenticated');
          return resolve();
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

// Get an instance of the authenticated user
export function fetchUser() {
  return new Promise ((resolve, reject) => {
    Http.get('/auth/me')
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

// Check if the user is authenticated
export function check() {
  return !!localStorage.getItem('access_token')
         && sessionStorage.getItem('is_authenticated');
}
