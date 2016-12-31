import {of as mostOf} from 'most'
import h from 'snabbdom/h'
import {merge as ramdaMerge} from 'ramda'
import View from './view'

export default function create ({model}) {
  const view = View({
    mostOf,
    h,
    name: model.name,
    pressTrigger: model.behaviors.triggers.press
  })
  const viewable = {
    view
  }

  return ramdaMerge(
    model,
    viewable
  )
}
