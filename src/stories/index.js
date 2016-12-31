import React from 'react'
import { storiesOf } from '@kadira/storybook'
import ButtonModel from '../components/button'
import ButtonViewable from '../components/button/react-viewable'
import InputModel from '../components/input'
import InputViewable from '../components/input/react-viewable'
import FormModel from '../components/form'
import FormViewable from '../components/form/react-viewable'
import ReactObserver from '../utils/react-observer'

storiesOf('components', module)
  .add('button', function onAdd () {
    const buttonModel = ButtonModel({name: 'button-name'})
    const { view: Button } = ButtonViewable({ model: buttonModel })

    return (
      <Button />
    )
  })
  .add('input', function onAdd () {
    const inputModel = InputModel({name: 'input-name'})
    const inputViewable = InputViewable({ model: inputModel })

    const Input = ReactObserver({
      state$: inputModel.state,
      WrappedComponent: inputViewable.view
    })

    return (
      <Input />
    )
  })
  .add('form', function onAdd () {
    const inputNames = [
      'first name',
      'last name',
      'e-mail',
      'password'
    ]
    const viewable = FormViewable({
      model: FormModel({inputNames})
    })

    const Component = viewable.view

    return (
      <Component />
    )
  })
