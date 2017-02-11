export default function create ({React, styled, setBaseMsTrigger}) {
  // @TODO: Fix the input to be a proper component.
  function onChange (event) {
    setBaseMsTrigger(parseInt(event.target.value))
  }

  return ({state}) => {
    return (
      <div>
        <input value={state.baseMs} onChange={onChange} />
      </div>
    )
  }
}
