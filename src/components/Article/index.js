import Comments from "../Comments";
import LikeButton from "../LikeButton"


export default function ArticleSection({articles}){

    return articles.map(
        (article, id) => {
            return <article key={id}>
                    <h2>{article.title}</h2>
                    {article.paragraphs.map(
                        (paragraph,id) => {
                            return <p key={`p${id}`}>{paragraph}</p>
                        }
                    )}
                    <LikeButton/>
                    <Comments commentsArray={article.comments}/>
                </article>
        }
    )
}
