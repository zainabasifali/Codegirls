import { useNavigate } from "react-router-dom";
import styles from './home.module.css'
import { useContext } from "react";
import UserContext from '../Login/Login'

let Home = ()=>{

    const user = useContext(UserContext);
    const navigate = useNavigate();
    const handleclick = ()=>{
        navigate("/login")
    }
    return(
        <>
        <h1>Welcome , Successfully logged in!</h1>
        
            <p>{user}</p>
        <button className={styles.logoutbutton} onClick={handleclick}>Logout</button>

        </>
    )
}
export default Home