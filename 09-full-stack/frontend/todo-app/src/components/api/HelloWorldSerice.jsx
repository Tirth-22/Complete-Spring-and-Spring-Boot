import { apiClient } from "./ApiClient"

export const retriveHelloWorldBean = () => apiClient.get('/hello-world-bean')

export const retriveHelloWorldPathvariable = (username, token) => apiClient.get(`/hello-world/path-variable/${username}`,{
    headers: {
        Authorization:token
    }
})

export const executeBasicAuthService = (token) => apiClient.get(`/basicauth`,{
    headers: {
        Authorization:token
    }
})