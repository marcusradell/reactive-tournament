import Model from '../../button'
import Button from './index'

test('create viewable', () => {
  const model = Model({name: 'a'})
  const viewable = Button({model})
  expect(Object.keys(viewable))
  .toEqual(['name', 'behaviors', 'view'])
})
