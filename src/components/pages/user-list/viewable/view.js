export default function create ({React, UserListView}) {
  return ({state}) => {
    const UserFormView = state.view
    return (
      <div>
        <h1>Users</h1>
        <UserFormView />
        <UserListView />
      </div>
    )
  }
}
