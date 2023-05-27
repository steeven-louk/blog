import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


export const AdminRedirect = ({ children }) => {
    const user = useSelector(state => state.user);

    if (!user?.isAdmin) {
        toast.error("Not Authorized", { position: 'top-center' });
        return <Navigate to='/' />
    }
    else {
        return children
    }

}
