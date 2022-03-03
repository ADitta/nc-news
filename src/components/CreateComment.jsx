import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { postCommentById } from "../utils/utils";
import DeleteComment from "./DeleteComment";

const CreateComment = ({ article_id, setArticleComments }) => {
  const { loggedInUser } = useContext(UserContext);

  const commentHandler = (event) => {
    event.preventDefault();
    let comment = event.target.comment.value;
    postCommentById(article_id, loggedInUser.username, comment).then((res) => {
      setArticleComments((currentComments) => [res, ...currentComments]);
      event.target.comment.value = "";
    });
  };
  return (
    <div className="create-comment">
      <form onSubmit={commentHandler}>
        <label>
          <p>Comment:</p>
          <input type="text" id="comment" required placeholder="Enter Text" />
        </label>
        <button>Post Comment</button>
      </form>
    </div>
  );
};

export default CreateComment;
