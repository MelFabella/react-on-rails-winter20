import { Component } from 'react';
import { Container } from 'semantic-ui-react';
class App extends Component {
  state = { todos: [] }
  // todos from db add them to my state
  componentDidMount() {
  }
  addTodo = (incomingTodo) => {
    // add the todo in the back end
    // add the todo in the front end
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
    return (
      <Container>
      </Container>
    )
  }
}
export default App;