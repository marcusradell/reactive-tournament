import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Provider from '../../provider'
import Model, {variants} from '../../button'
import Button from './index'

test('create viewable', () => {
  const localStorage = {
    getItem () {}
  }
  const provider = Provider({localStorage})
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
  const localStorage = {
    getItem () {}
  }
  const provider = Provider({localStorage})
  const model = Model({
    provider,
    name: 'a',
    variant: variants.default
  })
  const viewable = Button({model})
  const View = viewable.pureView

  return viewable.viewState_.take(1).forEach((state) => {
    const mountWrapper = shallow(<View state={state} />)
    const component = mountWrapper.first().shallow()
    expect(toJson(component)).toMatchSnapshot()
  })
})
