import Animations, {defaultBaseMs} from '../animations'

test('create default state', () => {
  const animations = Animations({initialBaseMs: defaultBaseMs})

  return animations.state_
  .take(1)
  .forEach((actual) => {
    expect(actual).toMatchSnapshot()
  })
})

test('change base ms', () => {
  const animations = Animations({initialBaseMs: defaultBaseMs})

  const promise = animations.state_
  .skip(1)
  .take(1)
  .forEach((actual) => {
    expect(actual).toMatchSnapshot()
  })

  animations.actions.triggers.setBaseMs(1)
  return promise
})
