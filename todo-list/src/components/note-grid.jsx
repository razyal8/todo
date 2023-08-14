import React from 'react';
import './note-grid.css'
import { Chip,Typography,CardContent,Card ,IconButton } from '@material-ui/core';
import DoneSharpIcon from '@material-ui/icons/DoneSharp';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useNavigate } from 'react-router-dom';

function NoteCard({ taskName, subject, priority, Description, Date}) {
  const navigate = useNavigate();

  const [selected, setSelected] = React.useState(false);

  const deleteTask = () => {
    console.log('delete')
  }

  const editTask = () => {
    navigate('/')
  }
  
  return (
    <Card >
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
          deleteIcon={<DoneSharpIcon />}
        />
        <IconButton aria-label="delete" onClick={deleteTask}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={editTask}>
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default NoteCard;
