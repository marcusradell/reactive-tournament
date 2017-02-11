export default ({
  streamFromPromise,
  updateFieldById,
  actions,
  id,
  save_
}) => {
  const merged_ = save_
  .map(value => (
    streamFromPromise(updateFieldById({id, value}))
  ))
  .switch()
  // @TODO: Implement
  // .tap((responseData) => (
  //   responseData.error
  //   ? actions.triggers.saveRejected(responseData)
  //   : actions.triggers.saveResolved(responseData)
  // ))

  return {
    merged_
  }
}
