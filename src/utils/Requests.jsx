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
    console.log(data)
    return axios(
        {
            method: "POST",
            data: data,
            url: `${djurl}/accounts/signin`,
            headers: { "Content-Type": "application/json" }
        }

    )
}