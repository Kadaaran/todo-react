import ListItem from './listItem'
import React from 'react'

class ListTodo extends React.Component {

  deleteTodo (i) {
    this.props.onDeleteClick(i);

  }

  render () {
    const { listTodo } = this.props
    return (
      <div className="ListTodo">
        {listTodo.map((todo, i) =>
          <ListItem key={i}
            index={i}
            onClick={this.deleteTodo.bind(this, i)}
            todo={todo} />)}
      </div>
    )
  }
}

export default ListTodo
