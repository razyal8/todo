import * as React from 'react';
import {useState} from 'react';
import { Typography,TextField,Button,MenuItem} from '@material-ui/core';
import './task-Forms.css';


export default function TaskForm() {
  const [priority, setPriority] = useState('');
  const subjects = ['coding', 'Math', 'Sport'];

  const handlePriorityChange = (event) => {
    const value = event.target.value;
    if (value === '' || (Number(value) <= 10 && Number(value) >= 0)) {
      setPriority(value);
    }
  };

  return (
    <div className="form-container">
      <Typography variant="h6" gutterBottom>
        Add New Task
      </Typography>
      <TextField
        required
        label="Task Name"
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Description"
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
        type="number"
        value={priority}
        onChange={handlePriorityChange}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Date"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" color="primary">
        Add
      </Button>
    </div>
  );
}