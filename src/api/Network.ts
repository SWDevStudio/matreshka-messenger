import axios, { AxiosInstance } from "axios";

export class Network {
  protected readonly axios: AxiosInstance;

  constructor(baseURL: string, headers?: { [key: string]: string }) {
    this.axios = axios.create({
      baseURL,
      headers
    });
  }
}

