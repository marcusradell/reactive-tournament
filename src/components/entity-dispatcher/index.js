export default function create ({uuidV4, apiServiceSink}) {
  function update (entity, id, field, body) {
    return apiServiceSink.update(entity, id, field, body)
  }

  function create (entity) {
    return apiServiceSink(entity)
  }

  function remove (entity, id) {

  }

  return {
    create,
    update,
    remove
  }
}
