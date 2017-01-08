export default ({
  // @TODO: partially apply entity, id, and field.
  dispatcher,
  entity,
  id,
  field, actions}) => {
  const save = actions.streams.save
  .map((stateData) => (
    dispatcher
    .update(entity, id, field, stateData)
  ))
  .switch()
  .tap((responseData) => (
    responseData.error
    ? actions.triggers.saveRejected(responseData)
    : actions.triggers.saveResolved(responseData)
  ))

  return {
    save
  }
}
