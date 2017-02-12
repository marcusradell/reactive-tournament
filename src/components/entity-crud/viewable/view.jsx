export default function create ({
  React,
  CreateView,
  ListView
}) {
  return function render ({state}) {
    return (
      <div>
        <CreateView />
        <ListView />
        <div>{JSON.stringify(state)}</div>
      </div>
    )
  }
}
