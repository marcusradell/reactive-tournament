export default function create ({name, behaviors, storeEffect}) {
  const create = behaviors.streams.create
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
    ? behaviors.triggers.createResolved()
    : behaviors.triggers.createRejected()
  ))

  const read = behaviors.streams.read
  .merge(
    behaviors.streams.createResolved,
    behaviors.streams.createRejected,
    behaviors.streams.updateResolved,
    behaviors.streams.updateRejected,
    behaviors.streams.removeResolved,
    behaviors.streams.removeRejected,
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
    ? behaviors.triggers.readResolved()
    : behaviors.triggers.readRejected()
  ))

  const update = behaviors.streams.update
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
    ? behaviors.triggers.updateResolved()
    : behaviors.triggers.updateRejected()
  ))

  const remove = behaviors.streams.remove
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
    ? behaviors.triggers.removeResolved()
    : behaviors.triggers.removeRejected()
  ))

  return {
    create,
    read,
    update,
    remove
  }
}
