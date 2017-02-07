import Provider from '../provider'

test('create', () => {
  const provider = Provider()
  const actual = Object.keys(provider)
  expect(actual).toMatchSnapshot()
})
