export default function create ({
  React,
  CreateView,
  ListView
}) {
  return function render ({state}) {
    console.log(state)
    return (
      <div>
        <CreateView />
        <ListView />
        <div>
          {
            state.entityForm && React.createElement(state.entityForm.view)
          }
        </div>
      </div>
    )
  }
}
