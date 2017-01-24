import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Model, {variants} from '../../button'
import Button from './index'

test('create viewable', () => {
  const model = Model({name: 'a', variant: variants.default})
  const viewable = Button({model})
  expect(Object.keys(viewable))
  .toEqual(['labels', 'actions', 'state_', 'pureView', 'view'])
})

test('render view', () => {
  const model = Model({name: 'a', variant: variants.default})
  const viewable = Button({model})
  const View = viewable.pureView

  return model.state_.take(1).forEach((state) => {
    const mountWrapper = shallow(<View state={state} />)
    const component = mountWrapper.first().shallow()
    expect(toJson(component)).toMatchSnapshot()
  })
})
