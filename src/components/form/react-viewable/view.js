export default function create ({
  React,
  children
}) {
  return () => (
    <div>
      {
        Object.keys(children).reduce((acc, key) => {
          const Child = children[key].view
          return [...acc, <Child key={key} />]
        }, [])
      }
    </div>
  )
}
