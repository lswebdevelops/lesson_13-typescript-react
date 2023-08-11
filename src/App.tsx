import { useState,useEffect , useCallback} from "react";

interface User {
  id: number,
  usename: string,
}

const App = () => {
  const [count, setCount ] = useState<number>(0);
  const [users, setUsers ] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("mounting");
    console.log('Users:', users);

    return() => console.log("unmounting");
  },[users])
  
  const addTwo = useCallback(()=> setCount(prev => prev + 1),[])
  const subTwo = useCallback(()=> setCount(prev => prev - 1),[])

  return(
  <>
    <h1>{count}</h1>
      <button onClick={addTwo}>+</button>
    <button onClick={subTwo}>-</button>
  </>

  )
}

export default App