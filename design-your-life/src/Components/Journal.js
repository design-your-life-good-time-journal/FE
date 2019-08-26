import React from "react";

const Journals = props => {
  return (
    <div>
      {props.journalsList.map(journal => {
        return (
          <div className="journals" key={journal.id}>
            <h2>{journal.title}</h2>
            <p>{journal.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Journals;