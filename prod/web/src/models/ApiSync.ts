import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    const getUrl = `${this.rootUrl}/users/${id}`;
    return axios.get(getUrl);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      const putUrl = `${this.rootUrl}/users/${id}`;
      return axios.put(putUrl, data);
    } else {
      const postUrl = `${this.rootUrl}/users`;
      return axios.post(postUrl, data);
    }
  }
}
