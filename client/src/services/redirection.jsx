import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const AdminRedirect = ({ children }) => {
    const navigate = useNavigate();

    const user = useSelector(state => state.user);

    if (!user?.isAdmin) {
        toast.error("Not Authorized", { position: 'top-center' });
        return navigate("/", {replace: true});
        

    }
    else {
        return children
    }

}
