import Colors, {defaultPrimaryMainHex} from '../colors'

test('create default state', () => {
  const colors = Colors({initialPrimaryMainHex: defaultPrimaryMainHex})

  return colors.state_.take(1).forEach((actual) => {
    expect(actual).toMatchSnapshot()
  })
})

test('change color', () => {
  const colors = Colors({initialPrimaryMainHex: defaultPrimaryMainHex})

  const promise = colors.state_.skip(1).take(1).forEach((actual) => {
    expect(actual).toMatchSnapshot()
  })

  colors.actions.triggers.setPrimaryMainHex('#882D60')

  return promise
})
