import React from 'react';
import './home-page.css'
import { useRef, useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const inputRef = useRef(null);
  const navigation = useNavigate()
  const [taskName, setTaskName] = useState('')

  function handleNewTaskClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    navigation('/tasks',{state:{taskName:taskName}});
  }

  const handleNewTaskName = (event) =>{
    setTaskName(event.target.value)
    console.log(taskName)
  }

  return (
    <div className="homepage">
      <div>
        <div className="title-homepage">
          <h1>Just Do it.</h1>
        </div>
        <div className="form-homepage">
          <TextField
            inputRef={inputRef}
            label="New Task"
            variant="filled"
            value={taskName}
            onChange={handleNewTaskName}
          />
          <Button onClick={handleNewTaskClick} variant="contained" color="primary">
            Add new task
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;





