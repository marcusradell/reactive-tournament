export default function create ({
  observableFromPromise,
  createEntityEffect,
  create_,
  createResolvedTrigger
}) {
  const createResolved_ = create_
  .chain(() => {
    return observableFromPromise(createEntityEffect())
  })
  .tap((data) => {
    return createResolvedTrigger(data)
  })

  return {
    combined_: createResolved_,
    createResolved_
  }
}
