import NoteCard from './note-grid';

import * as React from 'react';
import { Grid } from '@material-ui/core';
import {useLocation} from 'react-router-dom'


function NoteGrid() {

  const { state } = useLocation();
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} key={state.id}>
          <NoteCard
            taskName={state.taskInput} 
            subject={state.subjectInput} 
            priority={state.priorityInput} 
            Description={state.descriptionInput} 
            Date={state.dateInput}
            />
        </Grid>
    </Grid>
  );
}

export default NoteGrid;
