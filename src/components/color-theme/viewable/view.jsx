export default function create ({React, styled, setPrimaryMainTrigger}) {
  const Color = styled.div`
    background-color: ${({color}) => (color)};
    min-height: 50px;
    min-width: 50px;
  `

  // @TODO: Fix the input to be a proper component.
  function onChange (event) {
    setPrimaryMainTrigger(event.target.value)
  }

  return ({state}) => {
    return (
      <div>
        <input value={state.primaryMain} onChange={onChange} />
        <Color color={state.primaryMain} />
        <Color color={state.primarySecondary} />
        <Color color={state.complementaryMain} />
        <Color color={state.complementarySecondary} />
      </div>
    )
  }
}
