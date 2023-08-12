import { useState,useEffect , useCallback, MouseEvent , KeyboardEvent, useMemo, useRef} from "react";

interface User {
  id: number,
  usename: string,
}

type fibFunc = (n:number) => number 
const fib : fibFunc = (n) => {
  if(n <2 ) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum : number  = 37; //24157817 


const App = () => {
  const [count, setCount ] = useState<number>(0);
  const [users, setUsers ] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null)

  // if(!inputRef.current) 
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);


  useEffect(() => {
    console.log("mounting");
    console.log('Users:', users);

    return() => console.log("unmounting");
  },[users])
  
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement>| KeyboardEvent<HTMLButtonElement>): void=> setCount(prev => prev + 2),[])

  const result = useMemo<number>(() => fib(myNum),[myNum])



  const subTwo = useCallback(()=> setCount(prev => prev - 1),[])

  return(
  <>
    <h1>{count}</h1>
      <button onClick={addTwo}>+2</button>
    <button onClick={subTwo}>-1</button>
    <h2>{result}</h2>
    <input type="text" ref={inputRef} />
  </>

  )
}

export default App