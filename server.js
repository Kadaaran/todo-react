import express from 'express';
import ReactDOM from 'react-dom/server'
import { createElementWithContext } from 'fluxible-addons-react'

import app from './shared/app.js'

const server = express();

server.use('/dist', express.static(__dirname + '/dist'));

server.use((req, res) => {
  const context = app.createContext({})
  const rootComponent = ReactDOM.renderToString(createElementWithContext(context))
  const HTML = `
  <html>
    <head>
      <meta charset="utf-8">
      <title>Todo List ExpressJS</title>
    </head>
    <body>
      <div id="container">${rootComponent}</div>
    <script type="application/javascript" src="/dist/bundle.js"></script>
    </body>
  </html>
  `;
  res.end(HTML);
});

server.listen(3000, ()=> {
  console.log("Server started at port 3000")
})

export default server;
