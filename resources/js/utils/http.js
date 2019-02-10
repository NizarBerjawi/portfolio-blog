import { fetch } from 'whatwg-fetch';
import * as Auth from '../modules/auth/service';

const API_URL = 'http://portfolio.test/api';
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
}

// GET requests
let get = (url, options = {}) => {
  if (Auth.check()) {
    const payload = localStorage.getItem('access_token');
    headers['Authorization'] = `Bearer ${payload}`;
  }

  return fetch(API_URL + url, {
      headers,
      ...options
  });
}

// POST requests
let post = (url = '', data = {}) => {
    const method = 'POST';

    if (Auth.check()) {
      const payload = localStorage.getItem('access_token');
      headers['Authorization'] = `Bearer ${payload}`;
    }

    return fetch(API_URL + url, {
        method,
        headers,
        body: JSON.stringify(data)
    });
}

// PUT requests
let put = (url = '', data = {}) => {
    const method = 'PUT';

    if (Auth.check()) {
      const payload = localStorage.getItem('access_token');
      headers['Authorization'] = `Bearer ${payload}`;
    }

    return fetch(API_URL + url, {
        method,
        headers,
        body: JSON.stringify(data)
    });
}

export {get, post, put};
