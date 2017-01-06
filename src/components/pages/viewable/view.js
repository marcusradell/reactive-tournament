function getPage (route, children, defaultChild) {
  return children[route] ? children[route].view : children[defaultChild].view
}

export default function create ({React, ReactObserver, state$, children, defaultChild}) {
  const Render = ({state}) => (
    <div>
      {React.createElement(getPage(state.route, children, defaultChild))}
    </div>
  )

  const observedView = ReactObserver({
    state$,
    Render
  })

  return observedView
}
