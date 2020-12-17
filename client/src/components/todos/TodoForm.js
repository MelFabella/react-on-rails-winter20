import { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
class TodoForm extends Component {
  state = { title: '', complete: false }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
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