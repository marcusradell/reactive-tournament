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
.then(({id}) => {
  apiEffect.update(id, 'firstName', 'Marcus')
})
window.apiEffect = apiEffect
