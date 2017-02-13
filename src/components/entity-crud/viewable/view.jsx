export default function create ({
  React,
  CreateView,
  ListView
}) {
  return function render ({state}) {
    return (
      <div>
        <CreateView />
        <div>
          {
            state.entityForm &&
            React.createElement(state.entityForm.view)
          }
        </div>
        <ListView />
      </div>
    )
  }
}
