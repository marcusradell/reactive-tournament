export default function create ({h, name, state, updateTrigger}) {
  function onUpdate (event) {
    updateTrigger(event.target.value)
  }

  const view = state
  .map(function onMap (stateData) {
    return h('div',
      {
        style: {
          opacity: '0',
          transition: 'opacity 1s',
          delayed: {opacity: '1'}
        }
      },
      [
        h('label',
          {props: {htmlFor: name}},
        name),
        h('input', {
          props: {type: 'text', name: name},
          on: {input: onUpdate}
        })
      ])
  })

  return view
}
