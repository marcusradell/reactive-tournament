import snabbdom from 'snabbdom'
import eventListeners from 'snabbdom/modules/eventlisteners'
import '../static/css/style.css'
import InputModel from '../components/input'
import Input from '../components/input/viewable'
import FormModel from '../components/form'
import Form from '../components/form/viewable'

export function create(domElm) {
  const patch = snabbdom.init([
    eventListeners
  ])

  const inputModel = InputModel()
  const input = Input({model: inputModel})

  const formModel = FormModel()
  const form = Form({model: formModel})

  // input.view
  // .scan(function onScan(elm, nextElm) {
  //   patch(elm, nextElm)
  //   return nextElm
  // }, domElm)
  // .drain()

  form.view
  .scan(function onScan(elm, nextElm) {
    patch(elm, nextElm)
    return nextElm
  }, domElm)
  .drain()

  form.children
  .zip(function combine(childrenObject, mountsObject) {
    return {childrenObject, mountsObject}
  }, form.mounts)
  .map(function onMap({childrenObject, mountsObject}) {
    return Object.keys(childrenObject)
    .map(function onInnerMap(childKey) {
      return childrenObject[childKey].view
      .scan(function onScan(elm, nextElm) {
        console.log('elm:', elm)
        console.log('nextElm:', nextElm)
        patch(elm, nextElm)
        return nextElm
      }, mountsObject[childKey])
      .drain()
    })
  })
  .drain()
}
