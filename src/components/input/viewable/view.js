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
    switch (event.keyCode) {
      case 13:
        return okTrigger()
      case 27:
        return cancelTrigger()
      default:
        updateTrigger(event.target.value)
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
          on: {keyup: onUpdate}
        }),
        okButtonVNode,
        cancelButtonVNode
      ])
  },
  okButtonView,
  cancelButtonView)

  return view
}
