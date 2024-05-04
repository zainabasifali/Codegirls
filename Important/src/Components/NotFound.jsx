
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let Notfound = ()=>{
    const navigate = useNavigate();
   
          navigate("/users/home");

}
export default Notfound