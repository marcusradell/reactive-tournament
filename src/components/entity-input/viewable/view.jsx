export default function create ({
  ConnectObserver,
  React,
  css,
  StyleSheet,
  fieldName,
  type,
  state_,
  entityServiceFieldState_,
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
      borderBottom: 'solid white 2px',
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

  function onKeyDown (event) {
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

  const view = ({ state }) => {
    return (
      <div className={css(styles.component)}>
        <label className={css(styles.labelElement)} htmlFor={fieldName}>
          {fieldName}
        </label>
        <div className={css(styles.inputWrapper)}>
          <input
            className={css(styles.inputElement)}
            type={type}
            name={fieldName}
            placeholder={state.service || type}
            value={state.local.value}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <OkButtonView />
          <CancelButtonView />
        </div>
        <div>
          @TODO: service: {JSON.stringify(state.service, null, 2)}
        </div>
      </div>
    )
  }

  // @TODO: Refactor out to index.js
  const viewState_ = state_
  .combine((local, service) => {
    return {local, service}
  },
  entityServiceFieldState_
  )

  // @TODO: Refactor out to index.js
  return ConnectObserver({
    state_: viewState_,
    view
  })
}
