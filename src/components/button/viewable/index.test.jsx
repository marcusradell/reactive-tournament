import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import Model from '../../button'
import Button from './index'

test('create viewable', () => {
  const model = Model({name: 'a', variant: 'default'})
  const viewable = Button({model})
  expect(Object.keys(viewable))
  .toEqual(['labels', 'actions', 'state_', 'view'])
})

test('render view', () => {
  const model = Model({name: 'a', variant: 'default'})
  const viewable = Button({model})
  const View = viewable.view
  const shallowElm = render(<View />)
  expect(toJson(shallowElm)).toMatchSnapshot()
})
