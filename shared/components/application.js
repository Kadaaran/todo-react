import connectToStores from 'fluxible-addons-react/connectToStores'
import AddTodo from './addTodo'
import ListTodo from './listTodo'
// import DeleteAll from './deleteAll'
import React from 'react'
import addTodoAction from '../actions/addTodo'
import deleteTodoAction from '../actions/deleteTodo'
import updateTodoAction from '../actions/updateTodo'



class Application extends React.Component {
  // componentWillMount () {
  //   this.context.getStore('TodoStore').on('deleteTodo', (index) => {
  //     console.log('delete todo', index)
  //   })
  // }

  deleteTodo (i) {
    this.context.executeAction(deleteTodoAction, { index: i })
  }

  handleSubmit (value) {
    this.context.executeAction(addTodoAction, { todo: value })
  }

  render () {
    return (
      <div className="Application">
        <AddTodo
        listTodo={this.props.listTodo}
        currentIndex={this.props.currentIndex}
        onSubmit={this.handleSubmit.bind(this)} />
        <ListTodo
          onDeleteClick={this.deleteTodo.bind(this)}
          listTodo={this.props.listTodo} />
      </div>
    )
  }
}

Application.contextTypes = {
  getStore: React.PropTypes.func.isRequired,
  executeAction: React.PropTypes.func.isRequired
}

Application = connectToStores(Application, ['TodoStore'], context => {
  const TodoStore = context.getStore('TodoStore')
  return {
    listTodo: TodoStore.getListTodo(),
    currentIndex: TodoStore.getIndex()
  }
})

export default Application
