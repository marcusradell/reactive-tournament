/* global document */
// TODO: remove document side-effect if possible.

import snabbdom from 'snabbdom'
import eventListeners from 'snabbdom/modules/eventlisteners'
import props from 'snabbdom/modules/props'
import '../static/css/style.css'
import InputModel from '../components/input'
import Input from '../components/input/viewable'
import FormModel from '../components/form'
import Form from '../components/form/viewable'

export function create(domElm) {
  const patch = snabbdom.init([
    eventListeners,
    props
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
  .drain()

  form.view
  .scan(function onScan(elm, nextElm) {
    patch(elm, nextElm)
    return nextElm
  }, domElm)
  .drain()

  setTimeout(function onSetTimeout() {
    form.children
    .zip(function combine(childrenObject, mountsObject) {
      return {childrenObject, mountsObject}
    }, form.mounts)
    .map(function onMap({childrenObject, mountsObject}) {
      return Object.keys(childrenObject)
      .map(function onInnerMap(childKey) {
        const mountDomElm = document
        .getElementById(mountsObject[childKey].id)
        return childrenObject[childKey].view
        .scan(function onScan(elm, nextElm) {
          patch(elm, nextElm)
          return nextElm
        }, mountDomElm)
        .drain()
      })
    })
    .drain()
  }, 1000)
}
