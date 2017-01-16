import Model from '../../button'
import Button from './index'

test('create viewable', () => {
  const model = Model({name: 'a', variant: 'default'})
  const viewable = Button({model})
  expect(Object.keys(viewable))
  .toEqual(['labels', 'actions', 'state_', 'view'])
})
