export default function create ({entityForm_}) {
  return entityForm_.startWith(null).map((entityForm) => {
    return {
      entityForm,
      self: null
    }
  })
}
