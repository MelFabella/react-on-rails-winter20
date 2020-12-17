import { Component } from 'react';
class Todo extends Component {
  state = { showEditForm: false }
  render() {
    const { title, complete, id } = this.props
    return(
      <>
        <h1>{title} complete: {complete ? "true" : "false"}</h1>
        <button>Edit</button>
        <button>Delete</button>
      </>
    )
  }
}
export default Todo;