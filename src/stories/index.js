import React from 'react'
import '../index.css'
import { compose } from 'ramda'
import { of as streamOf } from 'most'
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

// let swap = true

// setInterval(() => {
//   swap
//   ? provider.colors.actions.triggers.setPrimaryMainHex('#FA5031')
//   : provider.colors.actions.triggers.setPrimaryMainHex('#C32689')
//   swap = !swap
// }, 1000)

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
              provider,
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
    const inputModel = InputModel({
      provider,
      fieldName: 'email',
      selectedId_: streamOf(''),
      type: 'text'
    })
    const inputViewable = InputViewable({ model: inputModel })
    const Input = inputViewable.view

    return (
      <div>
        <Input />
      </div>
    )
  })
  .add('form', function onAdd () {
    const viewable = FormViewable({
      model: FormModel({
        provider,
        entityType: 'user',
        selectedId_: streamOf('')
      })
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
    provider.entityServices.user.apiEffect.updateCache()
    return (
      <div>
        <Component />
      </div>
    )
  })
