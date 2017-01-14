import React from 'react'
import '../index.css'
import { storiesOf } from '@kadira/storybook'
import ButtonModel from '../components/button'
import ButtonViewable from '../components/button/viewable'
import { compose } from 'ramda'
import InputModel from '../components/input'
import InputViewable from '../components/input/viewable'
import FormModel from '../components/entity-form'
import FormViewable from '../components/entity-form/viewable'

function viewableData (model) {
  return {model}
}

function view (viewable) {
  return viewable.view
}

storiesOf('components', module)
  .add('button', function onAdd () {
    const variants = [
      'default',
      'action',
      'success',
      'warning',
      'error'
    ]

    return (
      <div>
        {
          variants.map((variant, index) => {
            const data = {
              variant,
              name: variant
            }
            const ComponentView = compose(
              view,
              ButtonViewable,
              viewableData,
              ButtonModel
              )(data)

            return (
              <div key={index} style={{padding: '15px'}}>
                <ComponentView />
              </div>
            )
          })
        }
      </div>
    )
  })
  .add('input', function onAdd () {
    const inputModel = InputModel({name: 'input', type: 'text'})
    const inputViewable = InputViewable({ model: inputModel })
    const Input = inputViewable.view

    return (
      <div>
        <Input />
      </div>
    )
  })
  .add('form', function onAdd () {
    const schema = [
      {name: 'first name', type: 'text'},
      {name: 'last name', type: 'text'},
      {name: 'email', type: 'text'},
      {name: 'password', type: 'password'}
    ]
    const viewable = FormViewable({
      model: FormModel({schema})
    })

    const Component = viewable.view

    return (
      <div>
        <Component />
      </div>
    )
  })
