export default function create ({
  React,
  CreateView,
  ListView,
  FormView
}) {
  return function render () {
    return (
      <div>
        <CreateView />
        <ListView />
        <FormView />
      </div>
    )
  }
}
