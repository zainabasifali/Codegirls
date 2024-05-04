
import useFetch from './hooks/usefetch';
const Fetch = () => {
  
 const[data,loading] =  useFetch('https://jsonplaceholder.typicode.com/todos')

 if(loading){return(<h1>loading..</h1>)}
  return (
    <div>
      
      {data.map((e,i) => (
       <li key={i}>{e.title}</li>
      ))}
    </div>
  );
};
export default Fetch;