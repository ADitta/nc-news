import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import {
  patchArticleVotesDecrease,
  patchArticleVotesIncrease,
} from "../utils/utils";

const Votes = ({ votes, article_id }) => {
  const [votesChange, setVotesChanged] = useState(0);

  const votesHandlerIncrease = () => {
    setVotesChanged((currVotes) => currVotes + 1);
    patchArticleVotesIncrease(article_id);
  };
  const votesHandlerDecrease = () => {
    setVotesChanged((currVotes) => currVotes - 1);
    patchArticleVotesDecrease(article_id);
  };
  return (
    <div className="votes-wrapper">
      <button className="upvote" onClick={votesHandlerIncrease}>
        {" "}
        <FontAwesomeIcon size="lg" icon={faThumbsUp} />
      </button>
      <a href=""> Votes: {votes + votesChange}</a>
      <button className="downvote" onClick={votesHandlerDecrease}>
        <FontAwesomeIcon size="lg" icon={faThumbsDown} />
      </button>
    </div>
  );
};

export default Votes;
