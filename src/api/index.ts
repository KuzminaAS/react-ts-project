import Services from '../services';

class API {
    private services: Services;
    private token: string

  constructor(services: Services) {
    this.services = services;
    this.token = ''
  }

  async GET(url: string, options: RequestInit = {}) {
    const res = await fetch(url, {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': this.token
      }
    });
    return res.json();
  }

  async POST(url: string, options: RequestInit = {}) {
    const res = await fetch(url, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': this.token
      }
    });
    return res.json();
  }

    async PUT(url: string, options: RequestInit = {}) {
    const res = await fetch(url, {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': this.token
      }
    });
    return res.json();
  }

  async DELETE(url: string, options: RequestInit = {}) {
    const res = await fetch(url, {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': this.token
      }
    });
    return res.json();
  }

  setToken(token: string){
    this.token = token;
  }

}
export default API;