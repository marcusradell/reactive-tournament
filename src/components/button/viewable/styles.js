function colorThemeToStyles ({
  primaryMain,
  primaryMainLight,
  complementaryMain,
  complementaryMainLight,
  primarySecondary,
  primarySecondaryLight,
  complementarySecondary,
  complementarySecondaryLight
}) {
  const success = {
    color: primarySecondary,
    colorPressed: primarySecondaryLight
  }
  const action = {
    color: primaryMain,
    colorPressed: primaryMainLight
  }
  const error = {
    color: complementaryMain,
    colorPressed: complementaryMainLight
  }
  const warning = {
    color: complementarySecondary,
    colorPressed: complementarySecondaryLight
  }

  return {
    variants: {
      success,
      action,
      error,
      warning
    }
  }
}

export default function create ({colorThemeState_}) {
  const styles_ = colorThemeState_
  .map(colorThemeToStyles)

  return styles_
}
