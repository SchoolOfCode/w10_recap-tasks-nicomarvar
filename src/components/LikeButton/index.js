import { useState } from "react";

import css from "../../styles/likeButton.module.css";


export default function LikeButton(){
    const [likeCount, setLikeCount] = useState(0);

    return(
        <div className={css.oneLiner}>
            <button onClick={ () => { setLikeCount(likeCount + 1)}}> Like 👍</button>
            <p className={css.marginLeft}> {likeCount} Likes</p>
        </div>
    )
}