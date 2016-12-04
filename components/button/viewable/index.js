import h from 'snabbdom/h'
import R from 'ramda'
import View from './view'

export default function create({model}) {
  const view = View({
    h,
    pressTrigger: model.behaviors.triggers.press
  })
  const viewable = {
    view
  }

  return R.merge(
    model,
    viewable
  )
}
