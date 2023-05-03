import axios from "axios";
import { djurl, parseJwt, SetLoginCookie, RemoveLoginCookie } from "./Global";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AxiosInterceptor() {

    const [redirect, setRedirect] = useState(false)
    // const navigate = useNavigate();

    // useEffect(() => {

    //     redirect && navigate('signin');
    // }, [redirect])



    //Add a response interceptor
    axios.interceptors.response.use(
        (res) => {
            // Add configurations here
            return res;
        },
        async function (error) {
            const originalRequest = error.config;
            let secondError, res
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                [secondError, res] = await axios({
                    method: "POST",
                    url: `${djurl}/accounts/token/refreshtoken`,
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                })
                    .then(async (response) => {
                        //handle success
                        const userID = parseJwt(response.data.access).userId
                        SetLoginCookie(userID, true)

                        return [null, await axios.request(originalRequest)];
                    }).catch(function (error) {

                        RemoveLoginCookie('userID', 'isLoggedin')
                        setRedirect(true)

                        if (error.response) {
                            // Request made and server responded
                            console.log(error.response.data);
                        } else if (error.request) {
                            // The request was made but no response was received
                            console.log(error.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error, 404 not found
                            console.log('Error', error.message);
                        }
                    });
                if (secondError) {
                    return Promise.reject(secondError);
                }
                return Promise.resolve(res)
            }
            return Promise.reject(error)

        }
    );
}
