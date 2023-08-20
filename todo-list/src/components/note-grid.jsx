import React from 'react';
import '../assets/note-grid.css'
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
// import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NoteCard({ id, taskName, subject, priority, Description, Date, onDelete}) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);

  const handleDelete = () =>{
    onDelete(id)
  }

  const handleEdit = () => {
    navigate('/tasks', {
      state: {
        id:id,
        taskName:taskName,
        description:Description,
        subject:subject,
        priority:priority,
        date:Date,
        newTask: false,
      }
    });
  };


  
  
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          name: {taskName}
        </Typography>
        <Typography variant="h6" gutterBottom>
          subject:  {subject}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Description:  {Description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Date: {Date}
        </Typography>
        <Chip label={priority}  color="primary" />
        <Chip
          onClick={() => setSelected((s) => !s)}
          onDelete={selected && (() => {})}
          color={selected ? "primary" : "secondary"}
          variant={selected ? "default" : "outlined"}
          label={selected ? "Completed" : "Doing"}
          deleteIcon={<DeleteIcon />}
        />
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit" onClick={handleEdit} >
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default NoteCard;
