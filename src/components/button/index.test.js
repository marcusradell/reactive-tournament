import Button from '../button'

test('button factory returns props', () => {
  const name = 'a'
  const button = Button({name})
  expect(Object.keys(button)).toEqual(['labels', 'actions', 'state_'])
})
