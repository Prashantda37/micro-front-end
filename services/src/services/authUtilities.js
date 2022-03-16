import axios from 'axios';
import { APP } from '../constants';

const { storageName } = APP;

export function setHeaders (auth) {
  axios.defaults.headers.common.Authorization = `Bearer ${auth.access_token}`;
}

export function setAuthData (data) {
  const autherizationData = JSON.stringify(data);
  if (data.access_token) {
    setCookie(storageName.autherizationData, autherizationData, 0);
    setCookie(storageName.autherizationToken, data.access_token, 0);
  }
}

export function readCookie (cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const carr = decodedCookie.split(';');
  for (let i = 0; i < carr.length; i++) {
    let c = carr[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function setCookie (name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; secure; path=/`;
}

export function deleteCookie (name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

/**
 * login params
 * username: redlistdemoadmin@redlist.com
 * password: demotime
 * grant_type: password
 * scope: read
 * client_id: redlistLocal
 */
