import h from 'snabbdom/h'
import FormModel from '../../components/form'
import Form from '../../components/form/viewable'
import View from './view'

export default function create () {
  const inputNames = [
    'email',
    'password'
  ]

  const formModel = FormModel({inputNames})
  const form = Form({model: formModel})

  const view = View({
    h,
    formView: form.view
  })

  return {
    view
  }
}
