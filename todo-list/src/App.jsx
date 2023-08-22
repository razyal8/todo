import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home-page'; 
import NoteGrid from './components/task-grid'
import TaskForm from './components/task-form';
import Header from './components/header';

function App() {
  return(
    <BrowserRouter>
    <div className='App'>
      <Header className="header"/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/tasks" element={<TaskForm />}/>
        <Route path="/notes" element={<NoteGrid />}/>
      </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;