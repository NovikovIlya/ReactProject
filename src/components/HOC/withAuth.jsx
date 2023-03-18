import { useContext } from "react";
import { AuthContext } from "../../providers/Auth.Provider";

export const withAuth = (Component) => (props) =>{
    const {user} = useContext(AuthContext);
    if (!user) return <p>Вы не авторизованы</p>

    return <Component {...props}/>
}