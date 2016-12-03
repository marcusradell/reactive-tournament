export default function create({h, state, updateTrigger}) {
  function onUpdate(event) {
    updateTrigger(event.target.value)
  }

  const view = state
  .map(function onMap(stateData) {
    return h('div', [
      h('input', {
        props: {type: 'text'},
        on: {input: onUpdate}
      }),
      h('div', [
        stateData.value.toString()
      ])
    ])
  })

  return view
}
