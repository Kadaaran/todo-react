import React from 'react'
import updateTodoAction from '../actions/updateTodo'

class AddTodo extends React.Component {

  componentDidUpdate(prevProps) {
    // console.log('prevIndex', prevProps.currentIndex)
     //console.log('currIndex', this.props.currentIndex)
    // console.log('todo', this.props.listTodo[this.props.currentIndex])

    if (this.props.currentIndex !== null && this.props.currentIndex !== prevProps.currentIndex) {
      this.refs.myInput.value = this.props.listTodo[this.props.currentIndex]
      this.refs.myInput.focus()
    }
  }

  handleSubmit (e) {
    //console.log(this.props.currentIndex)
    //console.log(this.props.listTodo[this.props.currentIndex])

    e.preventDefault()
    if (this.props.currentIndex !== null) {
      this.context.executeAction(
        updateTodoAction,
        {index: this.props.currentIndex, todo: this.refs.myInput.value})
      this.refs.myInput.value = ''
    }
    else {
      this.props.onSubmit(this.refs.myInput.value)
      this.refs.myInput.value = ''
    }
  }

  render () {
    return (
      <form
        className="AddTodo"
        onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="myInput" />
      </form>
    )
  }
}

AddTodo.contextTypes = {
  getStore: React.PropTypes.func.isRequired,
  executeAction: React.PropTypes.func.isRequired
}

export default AddTodo
