import Fluxible from 'fluxible'

const app = new Fluxible({
  component: require('./components/application').default
})

app.registerStore(require('./stores/todoStore').default)

export default app
