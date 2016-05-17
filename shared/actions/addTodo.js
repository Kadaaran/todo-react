export default (context, { todo }) => {
  context.dispatch('ADD_TODO', todo)
}
