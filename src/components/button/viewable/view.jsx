export default function create ({
  React,
  styled,
  labels: {name, variant},
  pressTrigger
}) {
  const variants = {
    default: {
      color: '#7C786A'
    },
    action: {
      color: '#8DCDC1'
    },
    success: {
      color: '#D3E397'
    },
    warning: {
      color: '#FFF5C3'
    },
    error: {
      color: '#EB6E44'
    }
  }

  function onClick () {
    pressTrigger()
  }

  const Button = styled.button`
    background-color: transparent;
    border: 3px solid ${variants[variant].color};
    color: ${({state}) => (state.self.isRecentlyPressed ? state.colorTheme.complementaryMain : state.colorTheme.primaryMain)};
    font-size: 15px;
    padding: 5px;
    
    &:focus {
      outline: none;
    }
  `

  const view = ({state}) => {
    return (
      <Button onClick={onClick} state={state}>
        {name}
      </Button>
    )
  }

  return view
}
