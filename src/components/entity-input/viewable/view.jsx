export default function create ({
  React,
  css,
  StyleSheet,
  fieldName,
  type,
  updateTrigger,
  OkButtonView,
  okTrigger,
  CancelButtonView,
  cancelTrigger
}) {
  // @TODO: Replace w styled-components
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
          <OkButtonView tabIndex='-1' />
          <CancelButtonView tabIndex='-1' />
        </div>
      </div>
    )
  }

  return view
}
