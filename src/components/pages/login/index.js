import FormModel from '../../entity-form'

export default function create ({provider}) {
  const inputSchema = [
    {name: 'email', type: 'text'},
    {name: 'password', type: 'password'}
  ]

  const form = FormModel({provider, schema: inputSchema})
  const children = {form}

  return {
    children
  }
}
