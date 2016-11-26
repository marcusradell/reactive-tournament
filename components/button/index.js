import {async} from 'most-subject'
import Behaviors from './behaviors'

export default function create() {
  const behaviors = Behaviors({async})

  return {
    behaviors
  }
}