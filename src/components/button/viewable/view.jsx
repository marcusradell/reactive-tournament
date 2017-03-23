export default function create ({
  React,
  styled,
  labels: {name, variant},
  pressTrigger
}) {
  function onClick () {
    pressTrigger()
  }

  const Button = styled.button`
    background-color: transparent;
    border: 3px solid ${({state}) => (
      state.self.isRecentlyPressed
      ? state.styles.variants[variant].colorPressed
      : state.styles.variants[variant].color
    )};
    color: ${({state}) => (
      state.self.isRecentlyPressed
      ? state.styles.variants[variant].colorPressed
      : state.styles.variants[variant].color
    )};
    font-size: 15px;
    padding: 5px;
    
    &:focus {
      outline: none;
    }
  `

  const view = ({state}) => {
    return (
      <Button tabIndex='-1' onClick={onClick} state={state}>
        {name}
      </Button>
    )
  }

  return view
}
