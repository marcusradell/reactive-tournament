import React from 'react'
import '../index.css'
import { compose } from 'ramda'
import { storiesOf } from '@kadira/storybook'
import Provider from '../components/provider'
import ColorThemeModel, {defaultPrimaryMain} from '../components/color-theme'
import ColorThemeViewable from '../components/color-theme/viewable'
import AnimationThemeModel, {defaultBaseMs} from '../components/animation-theme'
import AnimationThemeViewable from '../components/animation-theme/viewable'
import ButtonModel from '../components/button'
import ButtonViewable from '../components/button/viewable'
import EntityInputModel from '../components/entity-input'
import EntityInputViewable from '../components/entity-input/viewable'
import EntityCreateModel from '../components/entity-create'
import EntityCreateViewable from '../components/entity-create/viewable'
import FormModel from '../components/entity-form'
import FormViewable from '../components/entity-form/viewable'
import EntityCrudModel from '../components/entity-crud'
import EntityCrudViewable from '../components/entity-crud/viewable'

const provider = Provider({localStorage: window.localStorage})

function viewableData (model) {
  return {model}
}

function view (viewable) {
  return viewable.view
}

storiesOf('components', module)
  .add('color theme', function onAdd () {
    const model = ColorThemeModel({
      initialPrimaryMain: defaultPrimaryMain
    })

    const {view: View} = ColorThemeViewable({model})

    return (
      <div>
        <View />
      </div>
    )
  })
  .add('animation theme', function onAdd () {
    const model = AnimationThemeModel({
      initialBaseMs: defaultBaseMs
    })

    const {view: View} = AnimationThemeViewable({model})

    return (
      <div>
        <View />
      </div>
    )
  })
  .add('button', function onAdd () {
    const variants = [
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
    const inputModel = EntityInputModel({
      provider,
      fieldName: 'email',
      id: '0',
      entityType: 'user',
      type: 'text'
    })
    const inputViewable = EntityInputViewable({ model: inputModel })
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
        id: '1'
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
