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
        localStorage.setItem("log-token", res.data.token)
        localStorage.removeItem('reg-token')
    }

    return Boolean(res.data.token)
}

export const loginUserSecret = async (secretKey) => {
    const res = await axios.post(`${baseUrl}/login/secret`, {secretKey}, {headers: {
            'Authorization': localStorage.getItem("log-token")
    }})

    if (res.data.token) {
        localStorage.setItem("token", res.data.token)
        localStorage.removeItem('log-token')
    }
    return Boolean(res.data.token)
}

export const findUser = async () => {
    const user = await axios.get(`${baseUrl}/find`,{headers: {
             'Authorization': localStorage.getItem("token")
     }})

    if(user) {
        localStorage.setItem('user', JSON.stringify(user.data))
        console.log(user.data)
    }
}

// export const getChannels = async () => {
//     const res = await axios.get(`${baseUrl}/chat-list/1/10`, {headers: {
//         'Authorization': localStorage.getItem("token")
//     }})
//     console.log(res)
// }