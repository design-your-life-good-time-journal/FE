import React, {useState} from 'react';
import './App.css';

const JournalForm = props => {
  console.log(props);
  const [journal, setjournal] = useState({ title: "", body: "" });

  const changeHandler = event => {
    setjournal({ ...journal, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newJournal = {
      ...journal,
    };
    props.addNewJournal(newJournal);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"> Activity </label>
      <input
        type="text"
        name="activity"
        placeholder="Activity"
        value={journal.activity}
        onChange={changeHandler}
      />




<label htmlFor="Mood"> Current State </label>
      <input
        type="text"
        name="title"
        placeholder="Note Title"
        value={journal.title}
        onChange={changeHandler}
      />




      <label htmlFor="body">Reflection</label>
      <textarea
        name="body"
        placeholder="Type Your Thoughts Here"
        value={note.body}
        onChange={changeHandler}
      />

      <button type="submit">Add Entry</button>
    </form>
  );
};


export default JournalForm;