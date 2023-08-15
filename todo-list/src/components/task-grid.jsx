import * as React from 'react';
import NoteCard from './note-grid';
import { Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

function NoteGrid() {
  const { state }  = useLocation();

  let keys = Object.keys(sessionStorage);
  const storedStates = [];
  for (let key of keys) {
    storedStates.push(JSON.parse(sessionStorage.getItem(key)));
  }

  const [items, setItems] = useState(storedStates);
  const isNewState = !storedStates.some(state_a => JSON.stringify(state_a) === JSON.stringify(state));

  if (isNewState) {
    const newStates = [...storedStates, state];
    setItems(newStates);
    sessionStorage.setItem(`storedState_${state.id}`, JSON.stringify(state));
  }
  return (
    <Grid container spacing={2}> {
      items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <NoteCard
            id={item.id}
            taskName={item.taskInput}
            subject={item.subjectInput}
            priority={item.priorityInput}
            Description={item.descriptionInput}
            Date={item.dateInput}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default NoteGrid;
