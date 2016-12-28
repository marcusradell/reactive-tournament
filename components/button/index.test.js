import Button from '../button'

test('button factory returns name', () => {
  const name = 'a'
  const button = Button({name})
  expect(button.name).toBe(name)
})

test('button factory returns props', () => {
  const name = 'a'
  const button = Button({name})
  expect(Object.keys(button)).toEqual(['name', 'behaviors'])
})
