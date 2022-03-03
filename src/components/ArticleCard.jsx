import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/utils";
import { shortDate } from "../utils/shortDate";
import Comments from "./Comments";
import Votes from "./Votes";

const ArticleCard = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
    });
  }, []);
  return (
    <div className="each-article-container">
      <div className="titles">
        <h1>{article.title}</h1>
        <h2>{article.author}</h2>
        <h2>{article.topic}</h2>
        <p>{article.body}</p>
        <p>Posted at: {shortDate(article.created_at)}</p>
      </div>
      <Comments article_id={article_id} />
    </div>
  );
};

export default ArticleCard;
