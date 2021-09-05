import { useEffect, useState } from 'react';
import { Todo } from '@nx-project/data';

// interface Todo {
//   title: string;
// }

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
