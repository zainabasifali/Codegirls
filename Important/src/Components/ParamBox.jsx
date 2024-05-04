import {useParams } from 'react-router-dom';
import Notfound from './NotFound';
let Parambox = ()=>{
    let obj = [
        {
            id:1,
            name:"Ali",
            Age:18,
            DOB:"25/8/2000"
        },
        {
            id:2,
            name:"Zainab",
            Age:20,
            DOB:"25/8/2004"
        },
        {
            id:3,
            name:"Roohi",
            Age:28,
            DOB:"25/8/1990"
        },
        {
            id:4,
            name:"Baneen",
            Age:38,
            DOB:"25/8/1910"
        }
    ]

    let { id } = useParams();
    return(
        obj.map((e,i)=>{
                if(id == e.id){
                 return(
                    <div key={i}>
                    <h3>{e.name}</h3>
                    <h3>{e.Age}</h3>
                    <h3>{e.DOB}</h3>
                    </div>
                 )
                }
                else{
                    <Notfound/>
                }
            }
            ))

}

export default Parambox
