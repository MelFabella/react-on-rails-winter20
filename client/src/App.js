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
  updateTodo = (id, incomingTodo) => {
    // update the todo with the id in back end
    // update the todo with the id in front end
  }
  removeTodo = (id) => {
    // delete the todo in the back end 
    // delete the todo from our front end
  }
  render() {
    const { todos } = this.state
    return (
      <Container>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={todos} />
      </Container>
    )
  }
}
export default App;