// TODO: convert to .jsx
import React from 'react'
import { render } from 'react-dom'
import App from './App'

// eslint-disable-next-line react/jsx-filename-extension
render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
