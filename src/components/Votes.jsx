import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState, useEffect } from "react";
import {
  patchComponentsVotesDecrease,
  patchComponentsVotesIncrease,
} from "../utils/utils";

const Votes = ({ votes, component_name, component_id }) => {
  const [votesChange, setVotesChanged] = useState(0);
  const [changeAmount, setChangeAmount] = useState(votes);

  const votesHandlerIncrease = () => {
    console.log(votes, changeAmount);
    if (changeAmount < votes + 1) {
      setVotesChanged((currVotes) => currVotes + 1);
      patchComponentsVotesIncrease(component_name, component_id);
      setChangeAmount((currentAmount) => currentAmount + 1);
    }
  };

  const votesHandlerDecrease = () => {
    if (changeAmount > votes - 1) {
      setVotesChanged((currVotes) => currVotes - 1);
      patchComponentsVotesIncrease(component_name, component_id);
      setChangeAmount((currentAmount) => currentAmount - 1);
    }
  };

  return (
    <div className="votes-wrapper">
      <button className="upvote" onClick={votesHandlerIncrease}>
        {" "}
        <FontAwesomeIcon size="lg" icon={faThumbsUp} />
      </button>
      <a> Votes: {votes + votesChange}</a>
      <button className="downvote" onClick={votesHandlerDecrease}>
        <FontAwesomeIcon size="lg" icon={faThumbsDown} />
      </button>
    </div>
  );
};

export default Votes;
