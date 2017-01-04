function getPage (route, children) {
  return children[route] ? children[route].view : children.default.view
}

export default function create ({React, ReactObserver, state$, children}) {
  const Render = ({state}) => (
    <div>
      {React.createElement(getPage(state.route, children))}
    </div>
  )

  const observedView = ReactObserver({
    state$,
    Render
  })

  return observedView
}
