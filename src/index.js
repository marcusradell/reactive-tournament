import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import Provider from './components/provider'

const provider = Provider()
const app = App({provider})
const {view: View} = app
ReactDOM.render(<View />, document.getElementById('root'))
window.app = app

// @TODO: Remove
const {apiEffect} = provider.entityServices.user
apiEffect.create()
.then((data) => {
  apiEffect.update(data.id, 'firstName', 'Marcus')
  return data
})
.then((data) => {
  apiEffect.update(data.id, 'lastName', 'Nielsen')
})

window.apiEffect = apiEffect
window.user = provider.entityServices.user
