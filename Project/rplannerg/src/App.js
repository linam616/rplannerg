import React from 'react';
import './App.css';
import CourseRequirements from './components/CourseRequirements';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='Main'>
      <TodoList />
      <CourseRequirements />
    </div>
  );
}

export default App;