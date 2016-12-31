import {async} from 'most-subject'
import Behaviors from './behaviors'

export default function create ({name}) {
  const behaviors = Behaviors({async})

  return {
    name,
    behaviors
  }
}
