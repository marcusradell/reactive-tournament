export default function create ({React, UserListView}) {
  return () => (
    <div>
      <h1>Users</h1>
      <UserListView />
    </div>
  )
}
