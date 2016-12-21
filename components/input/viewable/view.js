export default function create ({
  h,
  name,
  state,
  updateTrigger,
  okButtonView,
  okTrigger,
  cancelButtonView,
  cancelTrigger
}) {
  function onUpdate (event) {
    if (event.keyCode === 13) {
      return okTrigger()
    }
    updateTrigger(event.target.value)
  }

  const view = state
  .combine(function onCombine (stateData, okButtonVNode, cancelButtonVNode) {
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
          props: {
            type: 'text',
            name: name,
            value: stateData.value
          },
          on: {input: onUpdate}
        }),
        okButtonVNode,
        cancelButtonVNode
      ])
  },
  okButtonView,
  cancelButtonView)

  return view
}
