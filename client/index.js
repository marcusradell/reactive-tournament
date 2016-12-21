// TODO: remove document side-effect if possible.

import snabbdom from 'snabbdom'
import eventListeners from 'snabbdom/modules/eventlisteners'
import props from 'snabbdom/modules/props'
import '../static/css/style.css'
import FormModel from '../components/form'
import Form from '../components/form/viewable'

export function create (domElm) {
  const patch = snabbdom.init([
    eventListeners,
    props
  ])

  const formModel = FormModel()
  const form = Form({model: formModel})

  form.view
  .scan(function onScan (elm, nextElm) {
    patch(elm, nextElm)
    return nextElm
  }, domElm)
  .drain()
}
