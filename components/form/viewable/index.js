import h from 'snabbdom/h'
import R from 'ramda'
import uuid from 'uuid'
import Input from '../../input/viewable'
import View from './view'
import Children from './children'

export default function create({model}) {
  const children = Children({
    Input,
    children: model.children
  })

  const {view, mounts} = View({
    h,
    uuid,
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
