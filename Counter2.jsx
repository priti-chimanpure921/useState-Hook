import { useState } from "react";

function Counter2()
{
   let [count, setCount] = useState(0);
   let increaseCount2 = () =>{ 
    setCount(count += 1);
    console.log(count);
   }

    return(
        <>
            <h3>Count2 = {count}</h3>
            <button onClick={increaseCount2}>Count2</button>
        </>
    )

}
export default Counter2;