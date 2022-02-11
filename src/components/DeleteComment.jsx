import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteCommentById } from "../utils/utils";

const DeleteComment = ({ comment_id, author }) => {
  const { loggedInUser } = useContext(UserContext);

  const deleteHandler = () => {
    deleteCommentById(comment_id);
  };

  const isCurrentUser = () => {
    if (author === loggedInUser.username) {
      return <button onClick={() => deleteHandler(comment_id)}>Delete</button>;
    } else {
      return <></>;
    }
  };
  return isCurrentUser();
};

export default DeleteComment;
