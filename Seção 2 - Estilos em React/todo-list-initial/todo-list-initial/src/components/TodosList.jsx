import {useContext} from 'react';
import {TodosContext} from '../TodosContext.js'
import Todo from './Todo.jsx';

function TodosList() {

  const store = useContext(TodosContext);

  function deleteHandler(id) {
    if(confirm('Are you sure you want to delete the to-do')){
      //store.setTodos(store.todos.filter(todo => todo.id !== id));
      store.dispatch({
        type: 'deleted',
        id: id
      });
    }
  }

  function toggleIsDoneHandler(id) {
    store.dispatch({
      type: 'toggledIsDone',
      id: id
    });
  }

  return (
    <>
        <div className="todos">

            {store.todos.map(todo =>
              <Todo
                deleteTodo={(id)=> deleteHandler(id)}
                toggleIsDone={(id)=> toggleIsDoneHandler(id)}
                todo={todo}
                key={todo.id}
            />
            )}
        </div>
    </>
  )
}

export default TodosList