import 'babel-polyfill'
import {createElement} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Root from './components/Root.js'
import reducers from './reducers/store.js'

const logger = createLogger({
  collapsed: () => true
})
const store = applyMiddleware(thunk, logger)(createStore)(reducers)

render(
  createElement(Provider, {store}, createElement(Root)),
  document.getElementById('app')
)
