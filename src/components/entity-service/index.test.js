import EntityService from '../entity-service'

test('interface', () => {
  const provider = {
    localStorage: {}
  }
  const entityService = EntityService({
    provider,
    entityType: 'thing'
  })

  const expected = Object.keys(entityService)
  const actual = [
    'labels',
    'actions',
    'state',
    'apiEffect'
  ]
  expect(expected).toEqual(actual)
})

test('#create()', () => {
  const store = {}

  const localStorage = {
    setItem (key, value) { store[key] = value },
    getItem (key) { return store[key] }
  }

  const provider = {
    localStorage
  }

  const entityService = EntityService({
    provider,
    entityType: 'thing'
  })

  return entityService.apiEffect.create()
  .then(({id}) => {
    const actualEntityStore = JSON.parse(store['thing'])
    const actual = actualEntityStore[id]
    expect(actual).toEqual({})
  })
})

test('#readAll()', () => {
  const store = {
    chair: JSON.stringify({
      stuff: 'abc'
    })
  }

  const localStorage = {
    getItem (key) { return store[key] }
  }

  const provider = {
    localStorage
  }

  const entityService = EntityService({
    provider,
    entityType: 'chair'
  })

  return entityService.apiEffect.readAll()
  .then((actual) => {
    const expected = JSON.parse(store.chair)
    expect(actual).toEqual(expected)
  })
})

test('#update()', () => {
  const store = {
    chair: JSON.stringify({
      someId: {
        someField: 'someValue'
      }
    })
  }

  const localStorage = {
    setItem (key, value) { store[key] = value },
    getItem (key) { return store[key] }
  }

  const provider = {
    localStorage
  }

  const entityService = EntityService({
    provider,
    entityType: 'chair'
  })

  return entityService.apiEffect.update('someId', 'someNewField', 'some new value')
  .then((actualResponse) => {
    expect(actualResponse).toEqual({})
    expect(store).toMatchSnapshot()
  })
})

test('#remove()', () => {
  const store = {
    chair: JSON.stringify({
      someId: {
        someField: 'someValue'
      },
      someOtherId: {
        someField: 'someOtherValue'
      }
    })
  }

  const localStorage = {
    setItem (key, value) { store[key] = value },
    getItem (key) { return store[key] }
  }

  const provider = {
    localStorage
  }

  const entityService = EntityService({
    provider,
    entityType: 'chair'
  })

  return entityService.apiEffect.remove('someId')
  .then((actualResponse) => {
    expect(actualResponse).toEqual({})
    expect(store).toMatchSnapshot()
  })
})
