import React from 'react'
import ReactDOM  from 'react-dom'
import app from './app'
import { createElementWithContext } from 'fluxible-addons-react'

app.rehydrate({}, (err, context) => {
    if (err) {
      throw err
    }

    window.context = context

    const mountNode = document.getElementById('container')

    ReactDOM.render(createElementWithContext(context), mountNode)
})
