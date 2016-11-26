export default function create({h, pressTrigger}) {
  function onClick() {
    pressTrigger()
  }

  function view() {
    return h('button', {on: {click: onClick}},
      [
        'some text'
      ]
    );
  }

  return view
}
