export default function create ({
  Color,
  initialPrimaryMain,
  setPrimaryMain_
}) {
  const secondaryDistance = 60
  const complementaryDistance = 180
  const shadingFactor = 0.5

  const state_ = setPrimaryMain_
  .startWith(initialPrimaryMain)
  .map((primaryMain) => {
    const primaryMainColor = Color(primaryMain)
    const complementaryMainColor = primaryMainColor.rotate(complementaryDistance)

    return {
      primaryMain: primaryMainColor.hsl().string(),
      primaryMainLight: primaryMainColor.hsl().lighten(shadingFactor).string(),
      complementaryMain: complementaryMainColor.hsl().string(),
      complementaryMainLight: complementaryMainColor.hsl().lighten(shadingFactor).string(),
      primarySecondary: primaryMainColor.rotate(secondaryDistance).hsl().string(),
      primarySecondaryLight: primaryMainColor.rotate(secondaryDistance).hsl().lighten(shadingFactor).string(),
      complementarySecondary: complementaryMainColor.rotate(secondaryDistance).hsl().string(),
      complementarySecondaryLight: complementaryMainColor.rotate(secondaryDistance).hsl().lighten(shadingFactor).string()
    }
  })

  return state_
}
