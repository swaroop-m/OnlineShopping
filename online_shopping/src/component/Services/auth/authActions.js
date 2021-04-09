import {LOGIN_REQUEST,SUCCESS,FAILURE,LOGOUT_REQUEST} from './authTypes'
import * as AT from './authTypes'
export const authenticateUser=(userName,password)=>{
    return dispatch =>{
        dispatch(loginRequest());
        if(userName==="test" && password==="test"){
            dispatch(success(true));
        } else{
            dispatch(failure());
        }
    };
};

const loginRequest =() => {
    return{
        type: LOGIN_REQUEST
    };
};

export const logoutUser=()=>{
    return dispatch=>{
        dispatch(logoutRequest());
        dispatch(success(false));
    };
};

const logoutRequest =() => {
    return{
        type: LOGOUT_REQUEST
    };
};

const success = (isLoggedIn) => {
    return{
        type: SUCCESS,
        payload: isLoggedIn
    };
};

/*const success = isLoggedIn => {
    return {
        type: AT.SUCCESS,
        payload: isLoggedIn
    };
};*/

const failure =(isLoggedIn) => {
    return{
        type: FAILURE,
        payload: false
    };
};