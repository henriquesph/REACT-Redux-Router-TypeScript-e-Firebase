// Reducers - serve para colocar toda a lógia do State em um só lugar

export default function todosReducers(todos, action){
    switch(action.type) {
        case 'deleted': {
            if(confirm('Are you sure you want to delete the to-do')){
                return todos.filter(todo => todo.id !== action.id);
            }
        }
        case 'toggledIsDone': {
            return (todos.map(todo => {
                if (todo.id === action.id) {
                  todo.isDone = !todo.isDone;
                  return todo;
                } else {
                  return todo;
                }
            }));
        }
    }
}