import Button from '../button'

// NOTE: Structural type test. Can be replaced by a type system.
test('button factory returns props', () => {
  const name = 'a'
  const button = Button({name})
  expect(Object.keys(button)).toEqual(['labels', 'actions', 'state_'])
})
