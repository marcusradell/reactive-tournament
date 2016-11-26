import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import eventListeners from 'snabbdom/modules/eventlisteners'
import '../static/css/style.css'
import ButtonModel from '../components/button'
import Button from '../components/button/viewable'

export function create(domElm) {
  const patch = snabbdom.init([
    eventListeners
  ])
  
  const buttonModel = ButtonModel()
  const button = Button({model: buttonModel})
  button.behaviors.streams.press.forEach(function onForEach() {
    console.log('test')
  })
  window.button = button

  patch(domElm, button.view())
}
