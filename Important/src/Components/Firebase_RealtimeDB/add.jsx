import { getDatabase, ref, child, push, update } from "firebase/database";
import {db} from '../../config/fb-config'
import { useState } from "react";


const Add = ()=>{
const [name, setname] = useState("");
const [type, settype] = useState("");
const [description, setdescription] = useState("");

let add =()=>{
    const db = getDatabase();

    const postData = {
     Name:name,
     Type:type,
     description:description
    };
  
    const newPostKey = push(child(ref(db), 'users')).key;
  
    const updates = {};
    updates['/posts/' + newPostKey] = postData;
  
    return update(ref(db), updates);
    }
      return(
        <>
        <h1>Add document</h1>
        <input type="text" placeholder="Name of the task" onChange={(e) => setname(e.target.value)} /><br/>
        <input type="text" placeholder="Type of the task" onChange={(e) => settype(e.target.value)} /> <br/>
        <input type="text" placeholder="Description of the task" onChange={(e) => setdescription(e.target.value)} /> <br/>
        <button onClick={add}>Add doc</button>
        </>
    )
}


export default Add