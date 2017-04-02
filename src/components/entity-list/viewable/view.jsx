export default function create ({
  React,
  styled,
  EntityCreateView,
  selectTrigger
}) {
  function onClickApplyId (id) {
    return function onClick () {
      selectTrigger({id})
    }
  }

  function getFieldView (key, value) {
    return (
      value != null &&
      <div key={key}>
        <div>{key}</div>
        <div>{value}</div>
      </div>
    )
  }

  const ListItemView = styled.div`
    backgroundColor: ${({selected, colorTheme}) => selected ? colorTheme.primaryMain : 'transparent'};
  `

  function getListItemView (id, selectedId, fields, colorTheme) {
    return (
      <ListItemView
        key={id}
        selected={id === selectedId}
        colorTheme={colorTheme}
        onClick={onClickApplyId(id)}>
        <div>
          <div>id</div>
          <div>{id}</div>
        </div>
        {Object.keys(fields).map((field) => {
          return getFieldView(field, fields[field])
        })}
      </ListItemView>
    )
  }

  function view ({state}) {
    return (
      <div>
        <EntityCreateView />
        {Object.keys(state.entityService).map((key) => (
          getListItemView(key, state.self.selectedId, state.entityService[key], state.colorTheme)
        ))}
      </div>
    )
  }

  return view
}
