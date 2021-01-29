import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY":"122542c3-2d9d-43ec-8ad9-376b033362fb"
    }
});

export const userAPI = {
    getUsers(count, page) {
        return instance.get(`users?count=${count}&page=${page}`)
            .then(response => {
                return response.data;
            })
    },
    unfollowSuccess(id) {
        return instance.delete(`follow/${id}`)
            .then (response => {
                return response.data;
            })
    },
    followSuccess(id) {
        return instance.post(`follow/${id}`, {} )
            .then (response => {
                return response.data;
            })
    },
    inAuth() {
        return instance.get(`auth/me` )
            .then (response => {
                return response.data;
            })
    },

    getProfile(userId) {
        return instance.get(`profile/`+userId )
            .then (response => {
                return response.data;
            })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe} )
            .then (response => {
                return response.data;
            })
    },
    logout() {
        return instance.delete(`auth/login` )
            .then (response => {
                return response.data;
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+userId )
            .then (response => {
                return response.data;
            })
    },
    setStatus(status) {
        return instance.put(`profile/status`, {status} )
            .then (response => {
                return response.data;
            })
    }

}