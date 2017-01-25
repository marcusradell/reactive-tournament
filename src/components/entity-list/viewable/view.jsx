export default function create ({React, styled}) {
  function view ({state}) {
    return (
      <div>
        <h2>Entity List</h2>
        {Object.keys(state).map((key) => (
          <div key={key}>
            {`${state[key].firstName} ${key}`}
          </div>
        ))}
      </div>
    )
  }

  return view
}
