import * as React from 'react';
import NoteCard from './note-grid';
import { Grid } from '@material-ui/core';
import { useLocation , useNavigate} from 'react-router-dom'
import { useState, useEffect  } from 'react'


const getStoredStates = () =>{
  let keys = Object.keys(sessionStorage);
  const storedStates = [];
  keys.forEach(key => {
    storedStates.push(JSON.parse(sessionStorage.getItem(key)));
  });

  return storedStates
}

function NoteGrid() {
  const navigate = useNavigate();
  const { state }  = useLocation();
 
  const storedStates = getStoredStates()
  const [items, setItems] = useState(storedStates);

  useEffect(() => {
    setItems(getStoredStates());
  }, [state]);

  useEffect(() => {
    const isUpdatedState = !storedStates.some(state_a => JSON.stringify(state_a) === JSON.stringify(state));
    if (isUpdatedState && state) {
      const isNewState = !storedStates.some(state_a => JSON.stringify(state_a.id) === JSON.stringify(state.id));
      if(isNewState){
        const newStates = [...storedStates, state];
        setItems(newStates);
      }
      sessionStorage.setItem(`storedState_${state.id}`, JSON.stringify(state));
    }
  }, [state, storedStates]);

  const handleDelete = (id) => {
    sessionStorage.removeItem(`storedState_${id}`);
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    // to remove the first state it's working becouse i add it to sessionStorage
    navigate({ ...navigate.location,  state: undefined }); 
  };

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
            onDelete={handleDelete}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default NoteGrid;
