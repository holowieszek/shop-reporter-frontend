import { API } from 'aws-amplify'

const ApiService = {
  get(resource) {
    return API.get('perfume', resource)
  },

  post(resource, data) {
    return API.post('perfume', resource, { body: data });
  },

  put(resource, data) {
    return API.put('perfume', resource, { body: data });
  },

  delete(resource) {
    return API.del('perfume', resource)
  }
}

export default ApiService;