import h from 'snabbdom/h'
import R from 'ramda'
import {of as mostOf} from 'most'
import Input from '../../input/viewable'
import View from './view'

export default function create({model}) {
  // TODO: Clean up logics.
  const children = model.children.map(function onMap(inputModels) {
    return inputModels.map(function onMapModelToViewable(inputModel) {
      return Input({model: inputModel})
    })
  })

  const {view, mounts} = View({
    h,
    mostOf,
    children
  })

  const viewable = {
    children,
    view,
    mounts
  }

  return R.merge(
    model,
    viewable
  )
}
