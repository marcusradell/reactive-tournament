export default function create ({
  observableFromPromise,
  createEntityEffect,
  create_,
  createResolvedTrigger
}) {
  const combined_ = create_
  .chain(() => {
    return observableFromPromise(createEntityEffect())
  })
  .tap(({id}) => {
    return createResolvedTrigger(id)
  })

  return {
    combined_
  }
}
