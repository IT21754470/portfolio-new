import react from 'react';

function App(){
    const [counter,setCounter]=useState(0);

    const increment=()=>{
        setCounter(counter+1);


    }
    const decrement=()=>{
        setCounter(counter-1);

    }

    return(
        <div>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}