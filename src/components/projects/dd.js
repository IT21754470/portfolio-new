import react from 'react';
import useState from 'react';

function counter(){

    const[counter,setcount]=useState(0);

    return (
    <div>
        <p>{counter}</p>

        <button onClick={()=>setcount(counter+1)}>increase</button>
    </div>
    );

}
export default counter;