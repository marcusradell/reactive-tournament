function triggerResponse (rejectedTrigger, resolvedTrigger) {
  return (responseData) => (
    responseData.header.error
    ? rejectedTrigger()
    : resolvedTrigger()
  )
}

// (responseData) => (
//     responseData.header.error
//     ? actions.triggers.createRejected()
//     : actions.triggers.createResolved()
//   )

export default function create ({name, actions, entityService}) {
  const create_ = actions.streams.create
  .chain(() => (
    entityService.create(name)
  ))
  .tap(
    triggerResponse(
      actions.triggers.createRejected,
      actions.triggers.createResolved
    )
  )

  const read_ = entityService.read_

  // @TODO: Fix the read strategy if http, but not for websockets.
  // Also, add an interval stream so we get polling.
  // const read = actions.streams.read
  // .merge(
  //   actions.streams.createResolved,
  //   actions.streams.createRejected,
  //   actions.streams.updateResolved,
  //   actions.streams.updateRejected,
  //   actions.streams.removeResolved,
  //   actions.streams.removeRejected,
  // )
  // .flatMap(() => (
  //   storeEffect.send({
  //     header: {
  //       entity: name,
  //       verb: 'read'
  //     }
  //   })
  // ))
  // // @TODO: switch here?
  // .tap((responseData) => (
  //   responseData.header.status === 'resolved'
  //   ? actions.triggers.readResolved()
  //   : actions.triggers.readRejected()
  // ))

  const update_ = actions.streams.update
  .chain(({id, field, value}) => (
    entityService.update(name, id, field, value)
  ))
  .tap(
    triggerResponse(
      actions.triggers.updateRejected,
      actions.triggers.updateResolved
    )
  )

  const remove_ = actions.streams.remove
  .chain(({id}) => (
    entityService.remove(name, id)
  ))
  .tap(
    triggerResponse(
      actions.triggers.removeRejected,
      actions.triggers.removeResolved
    )
  )

  return {
    create_,
    read_,
    update_,
    remove_
  }
}
