export default (context, { index }) => {
  context.dispatch('DELETE_TODO', index)
}
