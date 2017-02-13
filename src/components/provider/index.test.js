import Provider from '../provider'

test('create', () => {
  const localStorage = {
    getItem () {}
  }
  const provider = Provider({localStorage})
  const actual = Object.keys(provider)
  expect(actual).toMatchSnapshot()
})
