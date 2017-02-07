export default function create ({React, UserCrud}) {
  return () => (
    <div>
      <h1>Login</h1>
      <UserCrud />
    </div>
  )
}
