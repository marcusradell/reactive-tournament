import h from 'snabbdom/h'
import R from 'ramda'
import Input from '../../input/viewable'
import View from './view'

export default function create({model}) {
  const children = model.children.map(function onMap(inputModel) {
    return Input({model: inputModel})
  })

  const view = View({
    h
  })

  const viewable = {
    children,
    view
  }

  return R.merge(
    model,
    viewable
  )
}
