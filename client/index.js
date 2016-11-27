import snabbdom from 'snabbdom'
import eventListeners from 'snabbdom/modules/eventlisteners'
import '../static/css/style.css'
import InputModel from '../components/input'
import Input from '../components/input/viewable'

export function create(domElm) {
  const patch = snabbdom.init([
    eventListeners
  ])

  const inputModel = InputModel()
  const input = Input({model: inputModel})
  input.view
  .scan(function onScan(elm, nextElm) {
    patch(elm, nextElm)
    return nextElm
  }, domElm)
  .tap(function onTap(data) {
    console.log(data)
  })
  .drain()
}
