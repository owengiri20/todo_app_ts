import React from 'react';
import logo from './logo.svg';
import './App.css';

// components
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="App">
      TODO
      <TodoList />


    </div>
  );
}

export default App;
