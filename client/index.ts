// const snabbdom = require('snabbdom')
import {Subject, async} from 'most-subject'

const pressSubject :Subject<any> = async<any>()

pressSubject.forEach(function onForEach(data) {
  console.log('data', data)
})

pressSubject.next('test')
