import Comments from "../Comments";
import LikeButton from "../LikeButton"


export default function ArticleSection({articles}){

    return articles.map(
        (article) => {
            return <article>
                    <h2>{article.title}</h2>
                    {article.paragraphs.map(
                        (paragraph) => {
                            return <p>{paragraph}</p>
                        }
                    )}
                    <LikeButton/>
                    <Comments commentsArray={article.comments}/>
                </article>
        }
    )
}
