export default function create ({
  Color,
  initialPrimaryMain,
  setPrimaryMain_
}) {
  const secondaryDistance = 60
  const complementaryDistance = 180

  const state_ = setPrimaryMain_
  .startWith(initialPrimaryMain)
  .map((primaryMain) => {
    const primaryMainColor = Color(primaryMain)
    const complementaryMainColor = primaryMainColor.rotate(complementaryDistance)

    return {
      primaryMain: primaryMainColor.hsl().string(),
      complementaryMain: complementaryMainColor.hsl().string(),
      primarySecondary: primaryMainColor.rotate(secondaryDistance).hsl().string(),
      complementarySecondary: complementaryMainColor.rotate(secondaryDistance).hsl().string()
    }
  })

  return state_
}
