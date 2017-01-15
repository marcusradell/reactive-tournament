// @TODO: Rename all files to .jsx if webpack handles it.
export default function create ({
  ConnectObserver,
  React,
  css,
  StyleSheet,
  fieldName,
  type,
  state_,
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

  const view = ({ state }) => (
    <div className={css(styles.component)}>
      <label className={css(styles.labelElement)} htmlFor={fieldName}>
        {fieldName}
      </label>
      <div className={css(styles.inputWrapper)}>
        <input
          className={css(styles.inputElement)}
          type={type}
          name={fieldName}
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

  view.propTypes = {
    state: React.PropTypes.shape({
      value: React.PropTypes.string.isRequired
    })
  }

  return ConnectObserver({
    state_,
    view
  })
}
