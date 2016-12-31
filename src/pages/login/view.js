export default function create ({h, formView}) {
  return formView
  .map(function onMap (formVNode) {
    return h('div', [
      h('h1', 'Login'),
      formVNode
    ])
  })
}
