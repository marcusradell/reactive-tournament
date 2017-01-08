import React from 'react'
import { storiesOf } from '@kadira/storybook'
import ButtonModel from '../components/button'
import ButtonViewable from '../components/button/viewable'
import InputModel from '../components/input'
import InputViewable from '../components/input/viewable'
import FormModel from '../components/entity-form'
import FormViewable from '../components/entity-form/viewable'

storiesOf('components', module)
  .add('button', function onAdd () {
    const successButtonModel = ButtonModel({name: 'button-name', variant: 'success'})
    const { view: SuccessButton } = ButtonViewable({model: successButtonModel})

    const warningButtonModel = ButtonModel({name: 'button-name', variant: 'warning'})
    const { view: WarningButton } = ButtonViewable({model: warningButtonModel})

    const errorButtonModel = ButtonModel({name: 'button-name', variant: 'error'})
    const { view: ErrorButton } = ButtonViewable({model: errorButtonModel})
    return (
      <div>
        <div style={{padding: '15px'}}>
          <SuccessButton />
        </div>
        <div style={{padding: '15px'}}>
          <WarningButton />
        </div>
        <div style={{padding: '15px'}}>
          <ErrorButton />
        </div>
      </div>
    )
  })
  .add('input', function onAdd () {
    const inputModel = InputModel({name: 'input-name'})
    const inputViewable = InputViewable({ model: inputModel })

    const Input = inputViewable.view

    return (
      <Input />
    )
  })
  .add('form', function onAdd () {
    const schema = [
      {name: 'first name', type: 'text'},
      {name: 'last name', type: 'text'},
      {name: 'e-mail', type: 'text'},
      {name: 'password', type: 'password'}
    ]
    const viewable = FormViewable({
      model: FormModel({schema})
    })

    const Component = viewable.view

    return (
      <Component />
    )
  })
