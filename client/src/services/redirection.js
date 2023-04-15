// import { createContext } from "react";

// export const redirectionContext = createContext();

// export const redirectionProvider = ({children})=>{
//     const token = JSON.parse(localStorage.getItem("token"));

//     if(!token){
//         return window.location.replace('/login');
//     }else{
//         return {children}
//     }
// }

export const Redirect = ({children}) =>{
    const token = JSON.parse(localStorage.getItem("token"));

    if(!token){
        return window.location.replace('/login');
    }else{
        return {children}
    }
}