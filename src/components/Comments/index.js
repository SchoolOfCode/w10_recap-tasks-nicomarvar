export default function Comments({commentsArray}){

    return(
        commentsArray.map(
            (comment,id) => {
                return(
                    <div key={`comment${id}`}>
                        <h4>{comment.name} says:</h4>
                        <p>{comment.text}</p>
                    </div>
                )
            }
        )
    )
}