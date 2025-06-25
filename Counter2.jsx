import { useState } from "react";

function init()
{
    return Math.floor((Math.random() * 10)) ;
}
function Counter2()
{
//    let [count, setCount] = useState(0);//initialization value
   let [count, setCount] = useState(init);//initialization function passed by reference

   console.log("Component is rendered...");
   console.log(`count : ${count}`);

   let increaseCount2 = () =>{ 
    // setCount(count + 1);
    // setCount(count + 1 );
    //Use of callbacks to make the above behaviour predictable
    // change in the value of state variable
    
    setCount((count)=>{
        return count+1 ;
    });
    setCount((count)=>{
        return count+1;
    });
    
    //no change in the value of state variable then component doesn't re-render
    // setCount(25);

    console.log(`updated count val : ${count}`);
   }

    return(
        <>
            <h3>Count2 = {count}</h3>
            <button onClick={increaseCount2}>Count2</button>
        </>
    )

}

export default Counter2;