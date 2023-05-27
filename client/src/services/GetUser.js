import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/loadingSlice";
import axios from "axios";
import { setUserData } from "../redux/userSlice";


const GetUser = () => {
        
const dispatch = useDispatch();
const {user} = useSelector(state => state.user);
const token = localStorage.getItem('token');
// eslint-disable-next-line react-hooks/exhaustive-deps
const getUserData = async () =>{
    try {
        dispatch(showLoading());
        const res = await axios.post("http://localhost:8080/api/auth/userAuth-check", {
            token: token
        },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(hideLoading());
if(res.data.success){
    dispatch(setUserData(res.data.data))
}
    } catch (error) {
        dispatch(hideLoading());
        console.log(error)
    }   
}

useEffect(() => {
    if(!user){
        getUserData()
    }
}, [user, getUserData])


}



export default GetUser;



