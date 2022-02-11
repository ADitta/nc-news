import React from "react";
import { useEffect, useState } from "react";
import { getCommentsById } from "../utils/utils";
import CreateComment from "./CreateComment";
import DeleteComment from "./DeleteComment";

const Comments = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);

  useEffect(() => {
    getCommentsById(article_id).then((res) => {
      setArticleComments(res);
    });
  }, []);

  return (
    <div>
      <CreateComment article_id={article_id} />
      <ul>
        {articleComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h2>{comment.author}</h2>
              <p>{comment.body}</p>
              <DeleteComment
                author={comment.author}
                comment_id={comment.comment_id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
