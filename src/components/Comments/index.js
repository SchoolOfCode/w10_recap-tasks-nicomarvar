export default function Comments({commentsArray}){

    return(
        commentsArray.map(
            (comment) => {
                return(
                    <div>
                        <h4>{comment.name} says:</h4>
                        <p>{comment.text}</p>
                    </div>
                )
            }
        )
    )
}