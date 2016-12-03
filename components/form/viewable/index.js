import h from 'snabbdom/h'
import R from 'ramda'
import {of as mostOf} from 'most'
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
