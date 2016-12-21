import h from 'snabbdom/h'
import {of as mostOf} from 'most'
import View from './view'

export default function create () {
  const view = View({h, mostOf})

  return {
    view
  }
}
