import React from 'react'
import setIndex from '../actions/setIndex.js'
class ListItem extends React.Component {

  toggleEdit() {
    //get index
    this.context.executeAction(setIndex, this.props.index)
  }

  render () {
    return (
      <div className="Todo" >
        {this.props.todo}
        <button onClick={this.props.onClick}>Delete</button>
        <button onClick={this.toggleEdit.bind(this)}>Edit</button>
      </div>
    )
  }
}

ListItem.contextTypes = {
  getStore: React.PropTypes.func.isRequired,
  executeAction: React.PropTypes.func.isRequired
}

export default ListItem
