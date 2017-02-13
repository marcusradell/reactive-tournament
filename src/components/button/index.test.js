import Provider from '../provider'
import Button, {variants} from '../button'

// NOTE: Structural type test. Can be replaced by a type system.
test('button factory returns props', () => {
  const localStorage = {
    getItem () {}
  }
  const provider = Provider({localStorage})
  const name = 'a'
  const button = Button({provider, name, variant: variants.default})
  expect(Object.keys(button)).toEqual([
    'colorTheme',
    'labels',
    'actions',
    'state_'
  ])
})
