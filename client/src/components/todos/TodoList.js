import Todo from './Todo';
const TodoList = ({ todos, updateTodo, removeTodo }) => (
  <>
    {
      todos.map( t => 
        <Todo
          key={t.id}
          {...t}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      )
    }
  </>
)
export default TodoList;