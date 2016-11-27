import h from 'snabbdom/h'
import R from 'ramda'
import View from './view'

export default function create({model}) {
  const view = View({
    h,
    state: model.state,
    updateTrigger: model.behaviors.triggers.update
  })
  const viewable = {
    view
  }

  return R.merge(
    model,
    viewable
  )
}
