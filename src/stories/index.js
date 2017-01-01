import React from 'react'
import { merge as ramdaMerge } from 'ramda'
import { storiesOf } from '@kadira/storybook'
import ButtonModel from '../components/button'
import ButtonViewable from '../components/button/react-viewable'
import InputModel from '../components/input'
import InputViewable from '../components/input/react-viewable'
import FormModel from '../components/form'
import FormViewable from '../components/form/react-viewable'
import ReactObserver from '../utils/react-observer'

function createFormViewVariant ({
  React,
  children
}) {
  return () => (
    <div style={{backgroundColor: 'goldenrod'}}>
      {
        Object.keys(children).reduce((acc, key) => {
          const Child = children[key].view
          return [...acc, <Child key={key} />]
        }, [])
      }
    </div>
  )
}


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

    const Input = inputViewable.view

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
  .add('restyled form', function onAdd () {
    const inputNames = [
      'first name',
      'last name',
      'e-mail',
      'password'
    ]
    const viewable = FormViewable({
      model: FormModel({inputNames}),
      View: createFormViewVariant
    })

    const Component = viewable.view

    return (
      <Component />
    )
  })
