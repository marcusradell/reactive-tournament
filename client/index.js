// const snabbdom = require('snabbdom')
import '../static/css/style.css'
import {Subject, async} from 'most-subject'

export function create(domElm) {
  const pressSubject = async()

  pressSubject.forEach(function onForEach(data) {
    console.log('data', data)
  })

  pressSubject.next('test')
}