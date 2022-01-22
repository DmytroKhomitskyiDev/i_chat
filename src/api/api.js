import axios from "axios"

export const baseUrl = 'http://localhost:3000'

export const registerUser = async (email) => {
    const res = await axios.post(`${baseUrl}/register`, { email })

    if (res.data.token) {
        localStorage.setItem("reg-token", res.data.token)
    }
    
    return Boolean(res.data.token)
}

export const registerUserSecret = (data, key) => {
    return axios.post(`${baseUrl}/register/secret`, {
        ...data,
        secretKey: key
    }, {headers: {
        'Authorization': localStorage.getItem("reg-token")
    }})
}

export const loginUser = async (data) => {
    const res = await axios.post(`${baseUrl}/login`, data)

    if (res.data.token) {
        localStorage.setItem("token", res.data.token)
    }

    return Boolean(res.data.token)
}