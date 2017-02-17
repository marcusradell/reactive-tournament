export default function create ({
  React,
  ListView
}) {
  return function render ({state}) {
    return (
      <div>
        <ListView />
        <div>
          {
            state.entityForm &&
            React.createElement(state.entityForm.view)
          }
        </div>
      </div>
    )
  }
}
