import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/home-page'; 
import NoteGrid from './components/task-grid'
import TaskForm from './components/task-form';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/tasks" element={<TaskForm />}/>
        <Route path="/notes" element={<NoteGrid />}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;