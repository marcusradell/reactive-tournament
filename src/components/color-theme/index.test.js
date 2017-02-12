import ColorTheme, {defaultPrimaryMain} from '../color-theme'

test('create default state', () => {
  const colorTheme = ColorTheme({initialPrimaryMain: defaultPrimaryMain})

  return colorTheme.state_.take(1).forEach((actual) => {
    expect(actual).toMatchSnapshot()
  })
})

test('change color', () => {
  const colorTheme = ColorTheme({initialPrimaryMain: defaultPrimaryMain})

  const promise = colorTheme.state_.skip(1).take(1).forEach((actual) => {
    expect(actual).toMatchSnapshot()
  })

  colorTheme.actions.triggers.setPrimaryMain('#882D60')

  return promise
})
