export default function create ({
  React,
  StyleSheet,
  css,
  ConnectObserver,
  state_,
  labels: {name, variant},
  pressTrigger,
  press_
}) {
  const colorVariants = {
    success: 'green',
    warning: 'orange',
    error: 'red',
    successActive: 'darkgreen',
    warningActive: 'darkorange',
    errorActive: 'darkred'
  }

  const styles = StyleSheet.create({
    component: {
      border: `2px solid ${colorVariants[variant]}`,
      color: 'white',
      fontSize: '15px',
      padding: '5px',
      ':hover': {
        borderColor: colorVariants[variant]
      },
      ':focus': {
        borderColor: colorVariants[variant]
      },
      ':active': {
        backgroundColor: colorVariants[`${variant}Active`]
      }
    },
    recentlyPressed: {
      backgroundColor: colorVariants[`${variant}Active`]
    },
    notRecentlyPressed: {
      backgroundColor: 'black'
    }
  })

  function onClick () {
    pressTrigger()
  }

  const view = ({state}) => (
    <button className={css(styles.component, state.isRecentlyPressed ? styles.recentlyPressed : styles.notRecentlyPressed)} onClick={onClick}>
      {name}
    </button>
  )

  return ConnectObserver({view, state_: state_})
}
