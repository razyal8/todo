import React from 'react';
import './home-page.css'
import { useRef,useState } from 'react';
import { Button  ,TextField } from '@material-ui/core';
import TaskForm from './task-form';

function Homepage() {
  const inputRef = useRef(null);
  const [task, setNewTaskState] = useState(false);

  function handleNewTaskClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setNewTaskState(true);
  }

  // function handleClose() {
  //   setNewTaskState(false); 
  // }
  
  return (
    <div className="homepage">
      {!task ? (
        <div>
          <div className="title-homepage">
            <h1>Just Do it.</h1>
          </div>
          <div className="form-homepage">
            <TextField
              inputRef={inputRef}
              label="New Task"
              variant="filled"
            />
            <Button onClick={handleNewTaskClick} variant="contained" color="primary">
              Add new task
            </Button>
          </div>
        </div>
      ) : (
        <TaskForm  />
      )}

    </div>
  );
}

export default Homepage;





