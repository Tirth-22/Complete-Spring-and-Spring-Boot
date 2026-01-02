import axios from "axios";

const apiClient = axios.create(
    {
        baseURL : 'http://localhost:8080'
    }
)

export const retriveHelloWorldBean = () => apiClient.get('/hello-world-bean')

export const retriveHelloWorldPathvariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`,{
    headers: {
        Authorization:'Basic dGlydGg6ZHVtbXk='
    }
})

export const executeBasicAuthService = (token) => apiClient.get(`/basicauth`,{
    headers: {
        Authorization:token
    }
})