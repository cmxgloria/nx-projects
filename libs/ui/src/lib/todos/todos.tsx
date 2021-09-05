// import './todos.module.css';

// /* eslint-disable-next-line */
// export interface TodosProps {}

// export function Todos(props: TodosProps) {
//   return (
//     <div>
//       <h1>Welcome to Todos!</h1>
//     </div>
//   );
// }

// export default Todos;
import React from 'react';
import { Todo } from '@nx-project/data';

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={'todo'}>{t.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
