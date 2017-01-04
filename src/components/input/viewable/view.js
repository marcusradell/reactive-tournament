export default function create ({
  ReactObserver,
  React,
  name,
  state$,
  updateTrigger,
  OkButtonView,
  okTrigger,
  CancelButtonView,
  cancelTrigger
}) {
  function onKeyPress (event) {
    switch (event.keyCode) {
      case 13:
        return okTrigger()
      case 27:
        return cancelTrigger()
      default:
        return
    }
  }

  function onChange (event) {
    updateTrigger(event.target.value)
  }

  const Render = ({ state }) => (
    <div>
      <label htmlFor={name}>
        {name}
      </label>
      <input
        type='text'
        name={name}
        value={state.value}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      <OkButtonView />
      <CancelButtonView />
    </div>
  )

  Render.propTypes = {
    state: React.PropTypes.shape({
      value: React.PropTypes.string.isRequired
    })
  }

  const observedView = ReactObserver({
    state$,
    Render
  })

  return observedView
}
