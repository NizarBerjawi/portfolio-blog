import * as Http from '../../utils/http';
import store from 'store';

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
            reject(data);
          }
          return res.json();
        })
        .then(res => {
          store.set('access_token', res.access_token);
          store.set('is_authenticated', true);
          resolve();
        })
        .catch((err) => {
          const data = {
            text: null,
            statusCode: err.response.status,
          };
          reject(data);
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
            reject(data);
          }

          store.clearAll();
          resolve();
        })
        .catch((err) => {
          const data = {
            text: null,
            statusCode: err.response.status,
          };

          reject(data);
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
            reject(data);
          }
          return res.json();
        })
        .then(res => {
          store.set('user', res)
          resolve(res)
        })
        .catch((err) => {
          const data = {
            text: null,
            statusCode: err.response.status,
          };

          reject(data);
        });
  });
}

// Check if the user is authenticated
export function check() {
  return store.get('access_token')
         && store.get('is_authenticated');
}

// Get the user
export function user() {
  return store.get('user');
}
