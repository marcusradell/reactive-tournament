export default function create ({React, styled, selectTrigger}) {
  function onClickApplyId (id) {
    return function onClick () {
      selectTrigger({id})
    }
  }

  function getFieldView (key, value) {
    // @TODO: Guard against null or undefined, but allow falsy values.
    return (
      value &&
      <div key={key}>
        <div>{key}</div>
        <div>{value}</div>
      </div>
    )
  }

  const ListItemView = styled.div`
    backgroundColor: ${({selected}) => selected ? 'goldenrod' : 'transparent'}
  `

  function getListItemView (id, selectedId, fields) {
    return (
      <ListItemView key={id} selected={id === selectedId} onClick={onClickApplyId(id)}>
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
        <h2>Entity List</h2>
        {Object.keys(state.entityService).map((key) => (
          getListItemView(key, state.self.selectedId, state.entityService[key])
        ))}
      </div>
    )
  }

  return view
}
