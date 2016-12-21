import h from 'snabbdom/h'
import {merge as ramdaMerge} from 'ramda'
import {combineArray as mostCombineArray} from 'most'
import Input from '../../input/viewable'
import View from './view'
import Children from './children'

export default function create ({model}) {
  const {children, childViews} = Children({
    Input,
    children: model.children
  })
  const view = View({
    h,
    mostCombineArray,
    childViews
  })

  const viewable = {
    children,
    view
  }

  return ramdaMerge(
    model,
    viewable
  )
}
