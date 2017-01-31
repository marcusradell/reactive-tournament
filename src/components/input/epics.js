export default ({
  streamFromPromise,
  updateFieldById,
  actions,
  selectedId_,
  save_
}) => {
  const merged_ = save_
  .combine((value, {id}) => (
    streamFromPromise(updateFieldById({id, value}))
  ), selectedId_)
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
