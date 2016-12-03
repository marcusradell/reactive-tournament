import {of} from 'most'
import Input from '../input'

export default function create() {
  // TODO: send in fieldNames via create args.
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
