export default function create({h, state, updateTrigger}) {
  function onUpdate(event) {
    updateTrigger(event.target.value)
  }

  const view = state
  .map(function onMap() {
    return h('input', {
      props: {type: 'text'},
      on: {input: onUpdate}
    })
  })

  return view
}
