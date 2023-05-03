import Cookies from 'js-cookie'
import { logoutAPICall } from './Requests';
import { Navigate } from 'react-router-dom';

export const djurl = "http://127.0.0.1:8000"
export const STRIPE_PUBLISHABLE_KEY = 'pk_test_51M7bfPEK2d8QHRdoUVsMcqDEjoKecFb3TgUYdMUOPqWjkBsYAZZEz4PfxnVPEgeBSFEcckXZ93M5UCCGqqwUg6N900y2ckI9Wm'

export const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};

export const SetLoginCookie = (userID, isLoggedin) => {
    // setting cookies when user is successfully loggedin
    Cookies.set('userID', userID)
    Cookies.set('isLoggedin', isLoggedin)
}

export const RemoveLoginCookie = (userID, isLoggedin) => {
    // Deleting the cookies set during logging in
    Cookies.remove(userID)
    Cookies.remove(isLoggedin)
}

export const ProtectedRoute = ({ children }) => {
    const isLoggedin = Cookies.get('isLoggedin')
    if (!isLoggedin) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export const LogOut = (navigate) => {
    logoutAPICall().then((response) => {
        console.log(response.status)
        if (response.status === 200) {
            console.log('navigating')
            RemoveLoginCookie('userID', 'isLoggedin')
            navigate('/')
        }
    })
}