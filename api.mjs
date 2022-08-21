import axios from 'axios'

const API = axios.create({
  baseURL: 'https://localhost:420/api',
  headers: {
    test: 'test',
  },
})


API.interceptors.request.use((config) => {
    if (config.url === '/test') {
        alert('test')
    }
    return config
})

export default API