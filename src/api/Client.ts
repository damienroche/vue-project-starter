import axios, { Method } from 'axios'

const timeout: number = 30000

export default class Client {
  request(token: string, method: Method, uri: string, data: {}, params: {}) {
    const url = `${process.env.VUE_APP_API_BASE_URL}/${uri}`
    const headers = this.headers(token)
    return axios({ headers, method, timeout, url, data, params })
  }

  headers(token: string) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    return token ? { ...headers, Authorization: token } : headers
  }
}
