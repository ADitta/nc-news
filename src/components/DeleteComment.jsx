import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteCommentById } from "../utils/utils";

const DeleteComment = ({ setDeletedComment, comment_id, author }) => {
  const { loggedInUser } = useContext(UserContext);

  const deleteHandler = () => {
    deleteCommentById(comment_id);
    setDeletedComment(true);
  };

  const isCurrentUser = () => {
    if (author === loggedInUser.username) {
      return (
        <div>
          <button
            className="delete-btn"
            onClick={() => deleteHandler(comment_id)}
          >
            Delete
          </button>
        </div>
      );
    } else {
      return <></>;
    }
  };
  return isCurrentUser();
};

export default DeleteComment;
