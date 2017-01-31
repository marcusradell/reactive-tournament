export default function create ({React, ButtonView}) {
  return ({state}) => (
    <div>
      <code>
        {JSON.stringify(state, null, 2)}
      </code>
      <ButtonView />
    </div>
  )
}
