import {of as mostOf} from 'most'
import Input from '../input'
import Children from './children'

export default function create ({inputNames}) {
  const children = Children({mostOf, Input, inputNames})

  return {
    children
  }
}
