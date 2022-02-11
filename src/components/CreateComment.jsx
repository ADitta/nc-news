import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { postCommentById } from "../utils/utils";
import DeleteComment from "./DeleteComment";

const CreateComment = ({ article_id }) => {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState([]);

  const commentHandler = (event) => {
    event.preventDefault();
    let comment = event.target.comment.value;
    postCommentById(article_id, loggedInUser.username, comment).then((res) => {
      setNewComment((currentComments) => [...currentComments, res]);
    });
  };
  return (
    <div>
      <form onSubmit={commentHandler}>
        <label>
          <input type="text" id="comment" required placeholder="enterText" />
        </label>
        <button>Post Comment</button>
      </form>
      <ul>
        {newComment.map((comment) => {
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

export default CreateComment;
