import {of} from 'most'
import Input from '../input'

export default function create() {
  const fieldNames = [
    'email',
    'password'
  ]

  const inputs = fieldNames
  .map(function onMap(fieldName) {
    return Input({fieldName})
  })

  const children = of(inputs)

  return {
    children
  }
}
