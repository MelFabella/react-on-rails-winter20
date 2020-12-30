import { Component } from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {
  state = { showEditForm: false }

  toggleForm = () => {
    const { showEditForm } = this.state
    this.setState({ showEditForm: !showEditForm })
  }
  
  render() {
    const { title, complete, id, removeTodo } = this.props
    const { showEditForm } = this.state
    return(
      <>
        <h1>{title} complete: {complete ? "true" : "false"}</h1>
        {
          showEditForm ? <TodoForm { ...this.props } toggleForm={this.toggleForm} /> :
          <button onClick={() => this.toggleForm()}>Edit</button>
        }
        <button onClick={() => removeTodo(id) }>Delete</button>
      </>
    )
  }
}

export default Todo;