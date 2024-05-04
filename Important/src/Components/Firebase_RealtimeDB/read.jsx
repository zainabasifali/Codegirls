import { getDatabase, ref, child, get, update, remove } from "firebase/database";
import { useState } from "react";


let Read = ()=>{
    let [list, setList] = useState({});
    const dbRef = ref(getDatabase());
    let id =1

    get(child(dbRef, `posts/`)).then((snapshot) => {
        if (snapshot.exists()) {
            setList(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

    var result = Object.entries(list);
return(
    <>
     {result.map((task) => (
  <li key={task[0]}>{task[1].Name}<br />{task[1].Type}<br /></li>
))}

    </>
)
}

export default Read;