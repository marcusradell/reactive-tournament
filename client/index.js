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

  input.view
  .scan(function onScan(elm, nextElm) {
    patch(elm, nextElm)
    return nextElm
  }, domElm)
  .tap(function onTap(data) {
    console.log(data)
  })
  .drain()

  // form.children
  // .zip(function combine(childrenObject, mountsObject) {
  //   return {childrenObject, mountsObject}
  // }, form.mounts)
  // .map(function onMap({childrenObject, mountsObject}) {
  //   debugger
  //   return Object.keys(childrenObject)
  //   .map(function onInnerMap(childKey) {
  //     return childrenObject[childKey].view
  //     .scan(function onScan(elm, nextElm) {
  //       debugger
  //       patch(elm, nextElm)
  //       return nextElm
  //     }, mountsObject[childKey])
  //     .drain()
  //   })
  // })
  // .drain()
}
