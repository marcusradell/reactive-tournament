import h from 'snabbdom/h'
import R from 'ramda'
import most from 'most'
import uuid from 'uuid'
import Input from '../../input/viewable'
import View from './view'
import Children from './children'

export default function create ({model}) {
  const children = Children({
    Input,
    children: model.children
  })

  const {view} = View({
    h,
    most,
    uuid,
    children
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
