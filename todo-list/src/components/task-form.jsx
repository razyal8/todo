import * as React from 'react';
import {useState} from 'react';
import { Typography,TextField,Button,MenuItem} from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import './task-Forms.css';


export default function TaskForm() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [formState, setFormState] = useState({
    taskInput: state.taskName,
    descriptionInput: '',
    subjectInput: '',
    priorityInput: '',
    dateInput: '2017-05-24T10:30',
  });
  const [priorityInput, setPriorityInput] = useState('');

  const subjects = ['coding', 'Math', 'Sport'];

  const handlePriorityChange = (event) => {
    const value = event.target.value;
    if (value === '' || (Number(value) <= 10 && Number(value) >= 0)) {
      setPriorityInput(value);
      handleInputChange(event)
    }
  };

  const addNewTask = () =>{
    navigate('/notes',{state:formState});
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <Typography variant="h6" gutterBottom>
        Add New Task
      </Typography>
      <TextField
        required
        label="Task Name"
        name='taskInput'
        value={formState.taskInput}
        fullWidth
        variant="outlined"
        margin="normal"
        onChange={handleInputChange}
      />
      <TextField
        required
        label="Description"
        name='descriptionInput'
        value={formState.descriptionInput}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
      />
      <TextField
        select
        required
        label="Subject"
        name='subjectInput'
        value={formState.subjectInput}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
        margin="normal"
      >
        {subjects.map((subject) => (
          <MenuItem key={subject} value={subject}>
            {subject}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        required
        label="Priority"
        name='priorityInput'
        type="number"
        value={priorityInput}
        onChange={handlePriorityChange}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Date"
        name='dateInput'
        value={formState.dateInput}
        onChange={handleInputChange}
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={addNewTask}>
        Add
      </Button>
    </div>
  );
}