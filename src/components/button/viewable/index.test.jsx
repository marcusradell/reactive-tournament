import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Provider from '../../provider'
import Model, {variants} from '../../button'
import Button from './index'

test('create viewable', () => {
  const provider = Provider()
  const model = Model({
    provider,
    name: 'a',
    variant: variants.default
  })
  const viewable = Button({model})
  expect(Object.keys(viewable))
  .toEqual([
    'colorTheme',
    'labels',
    'actions',
    'state_',
    'viewState_',
    'pureView',
    'view'
  ])
})

test('render view', () => {
  const provider = Provider()
  const model = Model({
    provider,
    name: 'a',
    variant: variants.default
  })
  const viewable = Button({model})
  const View = viewable.pureView

  // @TODO: Get hold of the viewState_ here or we need to recombine.
  return viewable.viewState_.take(1).forEach((state) => {
    const mountWrapper = shallow(<View state={state} />)
    const component = mountWrapper.first().shallow()
    expect(toJson(component)).toMatchSnapshot()
  })
})
