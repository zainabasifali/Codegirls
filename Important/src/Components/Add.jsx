import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../config/fb-config'
import { useState } from "react";


const Add = ()=>{
const [name, setname] = useState("");
const [age, setage] = useState(null);
const [education, seteducation] = useState("");

let add = async()=>{
    console.log(name,age,education)

    try {
        const docRef = await addDoc(collection(db, "users"), {
             Name: name,
             Age: age,
             Education: education
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    const handlechange = (e)=>{
      const target = e.target.name
      // seteducation(e)
      console.log(target)
    }
      return(
        <>
        <h1>Add document</h1>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} /><br/>
        <input type="number" placeholder="Age" value={age} onChange={(e) => setage(e.target.value)} /> <br/>
        <input type="text" placeholder="Education" name="education" value={education} onChange={handlechange} /> <br/>
        <button onClick={add}>Add doc</button>
        </>
    )
}


export default Add