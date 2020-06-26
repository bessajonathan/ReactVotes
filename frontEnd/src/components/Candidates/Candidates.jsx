import React from "react";
import FlipMove from "react-flip-move";
import Card from "../Card/Card";
import Candidate from "../Candidate/Candidate";
export default function Candidates({
  candidates,
  previousVotes,
  previousPercentage,
}) {
  return (
    <div>
      <FlipMove>
        {candidates.map((candidate, index) => {
          const previousVoteObject = previousVotes.find(
            (x) => x.id === candidate.id
          );

          const previousVote = !!previousVoteObject
            ? previousVoteObject.votes
            : 0;

          const previousPercentageObject = previousPercentage.find(
            (x) => x.id === candidate.id
          );

          const percentage = !!previousPercentageObject
            ? previousPercentageObject.percentage
            : 0;

          return (
            <div key={candidate.id}>
              <Card>
                <Candidate
                  previousPercentage={percentage}
                  previousVote={previousVote}
                  candidate={candidate}
                  position={index + 1}
                />
              </Card>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}
