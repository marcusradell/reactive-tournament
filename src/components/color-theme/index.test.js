import ColorTheme, {defaultPrimaryMainHex} from '../color-theme'

test('create default state', () => {
  const colorTheme = ColorTheme({initialPrimaryMainHex: defaultPrimaryMainHex})

  return colorTheme.state_.take(1).forEach((actual) => {
    expect(actual).toMatchSnapshot()
  })
})

test('change color', () => {
  const colorTheme = ColorTheme({initialPrimaryMainHex: defaultPrimaryMainHex})

  const promise = colorTheme.state_.skip(1).take(1).forEach((actual) => {
    expect(actual).toMatchSnapshot()
  })

  colorTheme.actions.triggers.setPrimaryMainHex('#882D60')

  return promise
})
