import React from 'react'
import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ea9c9aaf-da1c-442a-90eb-a6309a98750a',
    }
})

export const axiosAPI = {
    getUsers(currentPage) {
        return instance.get(`users?count=6&page=${currentPage}`).then(response => {
            return response.data;
        })
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        })
    },
    getAuth() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
    getUserProfile(userId) {
        return instance.get(`profile/` + userId).then((response) => {
            return response.data;
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then((response) => {
            return response.data;
        })
    },
    putStatus(status) {
        return instance.put(`profile/status`, {status: status}).then((response) => {
            return response.data;
        })
    },
}