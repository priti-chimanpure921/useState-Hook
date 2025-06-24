function Counter1()
{
    let count1 = 0 ; 
    function increaseCount1()
    {
        count1 += 1;
        console.log(count1);
    }
    return(
        <>
            <h3>Count1 = {count1}</h3>
            <button onClick={increaseCount1}>Count1</button>
        </>
    )

}
export default Counter1;