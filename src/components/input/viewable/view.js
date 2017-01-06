export default function create ({
  ReactObserver,
  React,
  css,
  StyleSheet,
  name,
  type,
  state$,
  updateTrigger,
  OkButtonView,
  okTrigger,
  CancelButtonView,
  cancelTrigger
}) {
  const styles = StyleSheet.create({
    component: {
      padding: '5px'
    },
    inputWrapper: {
      border: 'solid white 2px',
      padding: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      width: '300px'
    },
    labelElement: {
      padding: '5px',
      fontSize: '20px',
      textTransform: 'capitalize'
    },
    inputElement: {
      border: '0px',
      padding: '5px',
      backgroundColor: 'black',
      width: '150px',
      fontSize: '15px',
      color: 'white'
    }
  })

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
    <div className={css(styles.component)}>
      <label className={css(styles.labelElement)} htmlFor={name}>
        {name}
      </label>
      <div className={css(styles.inputWrapper)}>
        <input
          className={css(styles.inputElement)}
          type={type}
          name={name}
          placeholder={type}
          value={state.value}
          onChange={onChange}
          onKeyDown={onKeyPress}
        />
        <OkButtonView />
        <CancelButtonView />
      </div>
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
