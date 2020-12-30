import { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class TodoForm extends Component { 
  state = { title: '', complete: false }
  
  componentDidMount() {
    if (this.props.id) {
      const { title, complete } = this.props
      this.setState({ title, complete })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { updateTodo, toggleForm, id } = this.props  
      updateTodo(id, this.state)
      toggleForm()
    } else {
      this.props.addTodo(this.state)
    }
    this.setState({ title: '', complete: false })
  }

  render() {
    const { title } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='title'
          value={title}
          onChange={this.handleChange}
        />
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default TodoForm;