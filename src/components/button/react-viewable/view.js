export default function create ({
  React,
  name,
  pressTrigger
}) {
  function onClick () {
    pressTrigger()
  }

  const view = () => (
    <button onClick={onClick}>
      {name}
    </button>
  )

  return view
}
