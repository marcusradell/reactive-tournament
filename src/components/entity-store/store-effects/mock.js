function send (verb, entity, body) {
  return Promise.resolve({ header: {status: 'resolved'}, body: {foo: 'bar'} })
}

export default function create () {
  return {
    send
  }
}
