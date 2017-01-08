export default function create ({name, actions, storeEffect}) {
  const create = actions.streams.create
  .flatMap(() => (
    // @TODO: Don't destructure possible hot code paths.
    storeEffect.send({
      header: {
        entity: name,
        verb: 'create'
      }
    })
  ))
  .tap((responseData) => (
    responseData.header.status === 'resolved'
    ? actions.triggers.createResolved()
    : actions.triggers.createRejected()
  ))

  const read = actions.streams.read
  .merge(
    actions.streams.createResolved,
    actions.streams.createRejected,
    actions.streams.updateResolved,
    actions.streams.updateRejected,
    actions.streams.removeResolved,
    actions.streams.removeRejected,
  )
  .flatMap(() => (
    storeEffect.send({
      header: {
        entity: name,
        verb: 'read'
      }
    })
  ))
  // @TODO: switch here?
  .tap((responseData) => (
    responseData.header.status === 'resolved'
    ? actions.triggers.readResolved()
    : actions.triggers.readRejected()
  ))

  const update = actions.streams.update
  .chain((body) => (
    storeEffect.send({
      header: {
        entity: name,
        verb: 'update'
      },
      body
    })
  ))
  .tap((responseData) => (
    responseData.header.status === 'resolved'
    ? actions.triggers.updateResolved()
    : actions.triggers.updateRejected()
  ))

  const remove = actions.streams.remove
  .chain((body) => (
    storeEffect.send({
      header: {
        entity: name,
        verb: 'remove'
      },
      body
    })
  ))
  .tap((responseData) => (
    responseData.header.status === 'resolved'
    ? actions.triggers.removeResolved()
    : actions.triggers.removeRejected()
  ))

  return {
    create,
    read,
    update,
    remove
  }
}
