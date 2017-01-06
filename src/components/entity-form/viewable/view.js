export default function create ({
  React,
  StyleSheet,
  css,
  children
}) {
  const styles = StyleSheet.create({
    component: {
      border: `2px solid white`,
      color: 'white',
      fontSize: '15px',
      padding: '5px'
    },
    child: {
      padding: '5px'
    }
  })

  return () => (
    <div className={css(styles.component)}>
      {
        Object.keys(children).reduce((acc, key) => {
          const Child = children[key].view
          return [...acc, <div key={key} className={css(styles.child)}><Child /></div>]
        }, [])
      }
    </div>
  )
}
