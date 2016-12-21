import {merge as ramdaMerge} from 'ramda'
import Pages from '../../../pages'
import View from './view'

export default function create ({model}) {
  const pages = Pages()
  const view = View({
    pages,
    state: model.state
  })

  const viewable = {
    pages,
    view
  }

  return ramdaMerge(
    model,
    viewable
  )
}
