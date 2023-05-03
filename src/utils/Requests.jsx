import axios from "axios"
import { djurl } from "./Global"


export const loginOtpRequest = (telephone) => {
    return axios(
        {
            method: "GET",
            url: `${djurl}/accounts/login-otp-request?telephone=${telephone}`,
            headers: { "Content-Type": "application/json" }
        }

    )
}

export const loginRequest = (data) => {
    return axios(
        {
            method: "POST",
            data: data,
            url: `${djurl}/accounts/signin`,
            withCredentials: true,
            headers: { "Content-Type": "application/json" }
        }

    )
}

export const logoutAPICall = () => {
    return axios(
        {
            method: "POST",
            url: `${djurl}/accounts/signout`,
            withCredentials: true,
            headers: { "Content-Type": "application/json" }
        }

    )
}

export const userDetailsRequest = (telephone) => {
    return axios(
        {
            method: "GET",
            url: `${djurl}/accounts/get-user-details`,
            withCredentials: true,
            headers: { "Content-Type": "application/json" }
        }

    )
}