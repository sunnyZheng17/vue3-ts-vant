import Axios, { AxiosResponse, AxiosError } from 'axios';

interface IParam {
  [extra: string]: any
}

interface IHeader {
  [extra: string]: any
}

interface IApiAxios {
  post: (url: string, param: IParam, headers?: IHeader) => Promise<any>,
  get: (url: string, headers?: IHeader) => Promise<any>
}

const post = (url: string, param: IParam, headers: IHeader = {}) => {
  return doAxios("post", url, param, headers)
}

const get = (url: string, headers: IHeader = {}) => {
  return doAxios("get", url, {}, headers)
}

const doAxios = (method: string, url: string, param: IParam, headers: IHeader = {}) => {
  return new Promise((resove, reject) => {
    Axios({
      method,
      url,
      data: param,
      headers,
    }).then((res: AxiosResponse) => {
      console.log(res);

      const obj = {
        status: res.status,
        code: res.data.code,
        data: res.data.data,
        message: res.data.message,
      }
      resove(obj)
    }).catch((err:AxiosError)=>{
      reject(err)
    })
  })
}

export const ApiAxios: IApiAxios = {
  post,
  get
}

