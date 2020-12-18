import { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';
class App extends Component {
  state = { todos: [] }
  componentDidMount() {
    axios.get("/api/todos")
    .then( res => {
      // todos from db add them to my state
      // debugger
      this.setState({ todos: res.data })
    }) 
    .catch( err => {
      console.log(err);
    })
  }
  addTodo = (todo) => {
    // add the todo in the back end
    // { incomingTodo: {title: 'rails', complete: true}}
    // { todo: {title: 'rails', complete: true}}
    axios.post('/api/todos', { todo })
    .then(res => {
      // add the todo in the front end
      const { todos } = this.state 
      this.setState({ todos: [ ...todos, res.data ]})
    })
    .catch( err => {
      console.log(err);
    })
  }
  updateTodo = (id, todo) => {
    // update the todo with the id in back end
    axios.put(`/api/todos/${id}`, { todo })
    .then(res => {
      // update the todo with the id in front end
      const todos = this.state.todos.map( t => {
        if (t.id === id ){
          return res.data
        }
        return t
      })
      this.setState({ todos })
    })
    .catch( err => {
      console.log(err);
    })
  }
  removeTodo = (id) => {
    // delete the todo in the back end 
    axios.delete(`/api/todos/${id}`)
    .then( res => {
      // delete the todo from our front end
      const { todos } = this.state
      this.setState({ todos: todos.filter(t => t.id !== id )})
      alert(`todo with id of ${id}` + res.data.message )
    })
    .catch( err => {
      console.log(err);
    })
  }
  render() {
    const { todos } = this.state
    return (
      <Container>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          todos={todos} 
          updateTodo={this.updateTodo} 
          removeTodo={this.removeTodo}
        />
      </Container>
    )
  }
}
export default App;