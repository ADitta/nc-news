import React from "react";
import { useEffect, useState } from "react";
import { getCommentsById } from "../utils/utils";
import CreateComment from "./CreateComment";
import DeleteComment from "./DeleteComment";
import Votes from "./Votes";

const Comments = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [deletedComment, setDeletedComment] = useState(false);

  useEffect(() => {
    getCommentsById(article_id).then((res) => {
      setArticleComments(res);
      setDeletedComment(false);
    });
  }, [setArticleComments, deletedComment]);

  return (
    <div className="comments-wrapper">
      <CreateComment
        setArticleComments={setArticleComments}
        article_id={article_id}
      />
      <div className="line"></div>
      <ul>
        {articleComments.map((comment) => {
          return (
            <li className="each-comment" key={comment.comment_id}>
              <h2>{comment.author}</h2>
              <p>{comment.body}</p>
              <Votes
                component_name={"comments"}
                votes={comment.votes}
                component_id={comment.comment_id}
              />
              <DeleteComment
                author={comment.author}
                comment_id={comment.comment_id}
                setDeletedComment={setDeletedComment}
                setArticleComments={setArticleComments}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
