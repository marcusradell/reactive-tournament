import React from 'react'
import '../index.css'
import { compose } from 'ramda'
import { storiesOf } from '@kadira/storybook'
import Provider from '../components/provider'
import ButtonModel from '../components/button'
import ButtonViewable from '../components/button/viewable'
import InputModel from '../components/input'
import InputViewable from '../components/input/viewable'
import EntityCreateModel from '../components/entity-create'
import EntityCreateViewable from '../components/entity-create/viewable'
import FormModel from '../components/entity-form'
import FormViewable from '../components/entity-form/viewable'
import EntityCrudModel from '../components/entity-crud'
import EntityCrudViewable from '../components/entity-crud/viewable'

const provider = Provider()

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
  .add('entity-create', function onAdd () {
    // @TODO: make an enum for entityType in provider.entityServices.types.
    const entityCreateModel = EntityCreateModel({
      provider,
      entityType: 'user'
    })
    const entityCreateViewable = EntityCreateViewable({
      model: entityCreateModel
    })
    const EntityCreateView = entityCreateViewable.view
    return (
      <EntityCreateView />
    )
  })
  .add('input', function onAdd () {
    const inputModel = InputModel({provider, name: 'input', type: 'text'})
    const inputViewable = InputViewable({ model: inputModel })
    const Input = inputViewable.view

    return (
      <div>
        <Input />
      </div>
    )
  })
  .add('form', function onAdd () {
    // @TODO: Include schema as a part of the EntityService
    const schema = [
      {name: 'first name', type: 'text'},
      {name: 'last name', type: 'text'},
      {name: 'email', type: 'text'},
      {name: 'password', type: 'password'}
    ]
    const viewable = FormViewable({
      model: FormModel({provider, schema})
    })

    const Component = viewable.view

    return (
      <div>
        <Component />
      </div>
    )
  })
  .add('entity-crud', function onAdd () {
    const viewable = EntityCrudViewable({
      model: EntityCrudModel({provider, entityType: 'user'})
    })

    const Component = viewable.view
    provider.entityServices.user.apiEffect.readAll()
    return (
      <div>
        <Component />
      </div>
    )
  })
