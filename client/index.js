/* global document */
// TODO: remove document side-effect if possible.

import {mergeArray} from 'most'
import snabbdom from 'snabbdom'
import eventListeners from 'snabbdom/modules/eventlisteners'
import props from 'snabbdom/modules/props'
import '../static/css/style.css'
// import InputModel from '../components/input'
// import Input from '../components/input/viewable'
import FormModel from '../components/form'
import Form from '../components/form/viewable'

export function create(domElm) {
  const patch = snabbdom.init([
    eventListeners,
    props
  ])

  // const inputModel = InputModel()
  // const input = Input({model: inputModel})

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

  setTimeout(function onSetTimeout() {
    // Get all the input components
    // and all the matching mounting points to attach to.
    form.children
    .zip(function onZip(childrenObject, mountsObject) {
      return {childrenObject, mountsObject}
    }, form.mounts)
    .map(function onMap({childrenObject, mountsObject}) {
      const streamsArray = Object.keys(childrenObject)
      // For each child input, patch when view updates.
      .map(function onMapToPatchedElm(childKey) {
        console.log('child mounting onto id:', mountsObject[childKey].id)
        const mountDomElm = document
        .getElementById(mountsObject[childKey].id)
        return childrenObject[childKey].view
        .scan(function onScan(elm, nextElm) {
          patch(elm, nextElm)
          return nextElm
        }, mountDomElm)
      })
      return mergeArray(streamsArray)
    })
    .switch()
    .drain()
  }, 500)
}
