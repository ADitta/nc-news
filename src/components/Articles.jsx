import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shortDate } from "../utils/shortDate";
import { getArticles, getTopics } from "../utils/utils";
import Nav from "./Nav";
import PageCount from "./PageCount";
import SortBy from "./SortBy";
import Topics from "./Topics";
import Votes from "./Votes";

const Articles = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrderBy, setSelectedOrderBy] = useState("asc");
  const [articleList, setArticleList] = useState([]);
  const [currentPage, setCurrentPage] = useState({
    page: 1,
    maxPage: 1,
  });

  useEffect(() => {
    getArticles(
      selectedTopic,
      selectedSortBy,
      selectedOrderBy,
      currentPage.page
    ).then((articlesResponse) => {
      setArticleList(articlesResponse);
    });
  }, [selectedTopic, selectedSortBy, selectedOrderBy, currentPage]);

  return (
    <>
      <div className="filter-wrapper">
        <div className="filter">
          <Topics
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
          />
          <SortBy
            setSelectedSortBy={setSelectedSortBy}
            setSelectedOrderBy={setSelectedOrderBy}
          />
        </div>
      </div>

      <div className="page-wrapper">
        <div className="articles-wrapper">
          {articleList.length ? (
            articleList.map((article) => {
              return (
                <div key={article.article_id} className="article-container">
                  <li>
                    <Link to={`/articles/${article.article_id}`}>
                      <h1>{article.title}</h1>
                    </Link>
                    <h2>{article.author}</h2>
                    <Votes
                      votes={article.votes}
                      component_name={"articles"}
                      component_id={article.article_id}
                    />
                    <h2> Comments {article.comment_count}</h2>
                    <h2> Posted at: {shortDate(article.created_at)}</h2>
                  </li>
                </div>
              );
            })
          ) : (
            <p className="loading">Loading...</p>
          )}

          <PageCount
            selectedTopic={selectedTopic}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Articles;
