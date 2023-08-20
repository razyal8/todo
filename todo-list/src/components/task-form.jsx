import * as React from 'react';
import {useState,useEffect} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/task-form.css';
import { v4 as uuidv4 } from 'uuid';


export default function TaskForm() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const subjects = ['coding', 'Math', 'Sport'];
  const [formState, setFormState] = useState({
    id: state.id || uuidv4(),
    taskInput: state.taskName,
    descriptionInput: state.description,
    subjectInput: state.subject,
    priorityInput: state.priority,
    dateInput: state.date,
    newTask: state.newTask
  });
  const [priorityInput, setPriorityInput] = useState('');
  const [visibleAdd, setVisible]= useState(true)

  useEffect(() => {
    setVisible(state.newTask); 
  }, [state.newTask, visibleAdd]);

  useEffect(() => {
    if (state) {
      setPriorityInput(state.priority);
    }
  }, [state]);

  const handlePriorityChange = (event) => {
    const value = event.target.value;
    if (value === '' || (Number(value) <= 10 && Number(value) >= 0)) {
      setPriorityInput(value);
      handleInputChange(event)
    }
  };

  const handleSubmit = () => {
    if (visibleAdd) {
      navigate('/notes',{state:formState});
    } else {
      navigate('/notes',{state:formState});
    }
  };



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
        minRows={4}
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
      {visibleAdd ? (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Edit
        </Button>
      )}
    </div>
  );
}