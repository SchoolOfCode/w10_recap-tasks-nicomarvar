import "./App.css";
import articles from "../../libs/articles";
import ArticleSection from "../Article";

function App() {
  return (
    <div className="App">
        <ArticleSection articles={articles}/>
    </div>
  );
}

export default App;
