import Todo from './Todo';
const TodoList = ({ todos }) => (
  <>
    {
      todos.map( t => 
        <Todo
          key={t.id}
          {...t}
        />
      )
    }
  </>
)
export default TodoList;