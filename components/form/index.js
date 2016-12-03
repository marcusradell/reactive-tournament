import {of} from 'most'
import Input from '../input'

export default function create() {
  // TODO: send in fieldNames via create args.
  const fieldNames = [
    'email',
    // 'password'
  ]

  const inputsObject = fieldNames
  .reduce(function onReduce(acc, fieldName) {
    acc[fieldName] = Input({fieldName})
    return acc
  }, {})

  const children = of(inputsObject)

  return {
    children
  }
}
