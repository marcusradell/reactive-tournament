import Epics from './epics'
import {async as Subject} from 'most-subject'
import {fromPromise as observableFromPromise} from 'most'

test('epics', (done) => {
  const expected = {id: 1}
  const createEntityEffect = () => {
    return Promise.resolve(expected)
  }
  const create_ = Subject()
  function createResolvedTrigger (actual) {
    expect(actual).toBe(expected.id)
    done()
  }
  const epics = Epics({
    createEntityEffect,
    create_,
    createResolvedTrigger,
    observableFromPromise
  })
  epics.combined_.drain()
  create_.next()
})
