import { useState } from "react";

function LikeButton()
{
    let [ isLike , setIsLike ] = useState(false);
    let [ clicks , setClicks ] = useState(0);

    let toggleLike = () => {
        setIsLike(!isLike);
        setClicks(clicks+=1);
    }

    let styles = { color : "red"};
    
    return(
        <>
            <h3>If you like this app?</h3>
            <p>Clicks : {clicks}</p>
            <p onClick={toggleLike} > 
                {isLike ? <i className="fa-solid fa-heart" style={ styles}></i> :
                 <i className="fa-regular fa-heart"></i>
             } </p>
        </>
    )
}

export default LikeButton;