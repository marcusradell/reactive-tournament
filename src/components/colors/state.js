export default function create ({
  Color,
  initialPrimaryMainHex,
  setPrimaryMainHex_
}) {
  const secondaryDistance = 60
  const complementaryDistance = 180

  const state_ = setPrimaryMainHex_
  .startWith(initialPrimaryMainHex)
  .map((primaryMainHex) => {
    const primaryMain = Color(primaryMainHex)
    const complementaryMain = primaryMain.rotate(complementaryDistance)

    return {
      primaryMain: primaryMain.hsl().string(),
      complementaryMain: complementaryMain.hsl().string(),
      primarySecondary: primaryMain.rotate(secondaryDistance).hsl().string(),
      complementarySecondary: complementaryMain.rotate(secondaryDistance).hsl().string()
    }
  })

  return state_
}
