import FormModel from '../../entity-form'

export default function create () {
  const inputSchema = [
    {name: 'email', type: 'text'},
    {name: 'password', type: 'password'}
  ]

  const form = FormModel({schema: inputSchema})
  const children = {form}

  return {
    children
  }
}
