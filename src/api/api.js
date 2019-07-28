import axios from 'axios'

function makeConfig(method, url, data, headers) {
  method = method.toUpperCase()

  let config = {
    method: method,
    timeout: 10000
  }

  if (headers) {
    config.header = headers
  }

  config.url = url.trim()

  if ("GET" === method) {

  } else if ("POST") {

  }

  return config
}

function wrapApi (method, url, data, headers) {
  const config = makeConfig()

  return new Promise((resolve, reject) => {
    return axios()
      .then(response => {
        return resolve(response)
      }, error => {
        return reject(error)
      })
  })
}

export {
  wrapApi
}