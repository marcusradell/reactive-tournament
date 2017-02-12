import {merge as ramdaMerge, omit as ramdaOmit} from 'ramda'
import {v4 as uuidV4} from 'uuid'
import LocalStorageApiEffect from './local-storage-api-effect'

test('interface', () => {
  const localStorage = {}

  function setStateTrigger () { }
  const apiEffect = LocalStorageApiEffect({
    localStorage,
    ramdaMerge,
    ramdaOmit,
    uuidV4,
    entityType: 'thing',
    setStateTrigger: setStateTrigger
  })
  const expected = Object.keys(apiEffect)
  const actual = [
    'create',
    'readAll',
    'update',
    'updateCache',
    'remove'
  ]
  expect(expected).toEqual(actual)
})
