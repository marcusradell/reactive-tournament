import FormModel from '../../form'

export default function create () {
  const inputNames = [
    'email',
    'password'
  ]

  const form = FormModel({inputNames})
  const children = {form}

  return {
    children
  }
}
