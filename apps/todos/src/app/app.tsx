import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import React, { useEffect, useState } from 'react';

interface Todo {
  title: string;
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
    // setTodos([
    //   ...todos,
    //   {
    //     title: `New todo ${Math.floor(Math.random() * 1000)}`,
    //   },
    // ]);
  }

  return (
    <>
      <h1>Todos</h1>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
      <ul>
        {todos.map((t) => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
