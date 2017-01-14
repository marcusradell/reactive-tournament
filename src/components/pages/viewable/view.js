function getPage (route, children, defaultChild) {
  return children[route] ? children[route].view : children[defaultChild].view
}

export default function create ({
  React,
  ConnectObserver,
  state_,
  children,
  defaultChild
}) {
  const view = ({state}) => (
    <div>
      {React.createElement(getPage(state.route, children, defaultChild))}
    </div>
  )

  return ConnectObserver({
    state_,
    view
  })
}
