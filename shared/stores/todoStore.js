import BaseStore from 'fluxible/addons/BaseStore';


class TodoStore extends BaseStore {
  static storeName = 'TodoStore'

  static handlers = {
    'ADD_TODO': 'addTodo',
    'DELETE_TODO': 'deleteTodo',
    'UPDATE_TODO': 'updateTodo',
    'SET_INDEX': 'setIndex'
    //'DELETE_ALL': 'deleteAll'
  }

  constructor (dispatcher) {
    super(dispatcher)

    this.currentIndex = null;
    this.listTodo = [
      'todo1',
      'todo2',
      'todo3'
    ]
  }

  setIndex (index) {
    this.currentIndex = index
    //console.log('currentIndex', this.currentIndex)
    this.emitChange()
  }

  updateTodo (item) {
    const listTodo = this.listTodo
    var index = item.index
    var value = item.todo

    listTodo[index] = value
    this.listTodo = listTodo

    this.currentIndex = null
    this.emitChange()
  }

  getIndex () {
    return this.currentIndex
  }
  // deleteAll () {
  //   const listTodo = this.listTodo
  //
  //   //listTodo.splice(index, 1)
  //   this.listTodo = listTodo
  //   this.emitChange()
  //   //this.emit('deleteTodo', index)
  // }

  deleteTodo (index) {
    const listTodo = this.listTodo

    listTodo.splice(index, 1)
    this.listTodo = listTodo
    this.currentIndex = null
    this.emitChange()

    //Call /applications.js => componentWillMount, dans un change
    //il y plusieurs fonctions qui
    //passent dans ordre, tu peux en modif une pour
    //sauvegarder, console log etc
    this.emit('deleteTodo', index)
  }

  addTodo (todo) {
    const listTodo = this.listTodo

    listTodo.unshift(todo)
    this.listTodo = listTodo
    this.currentIndex = null
    this.emitChange()
  }

  setListTodo (listTodo) {
    this.listTodo = listTodo
    this.emitChange()
  }

  getListTodo () {
    return this.listTodo
  }
}

export default TodoStore
