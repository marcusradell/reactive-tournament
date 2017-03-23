export default function create ({state_, styles_}) {
  return state_.combine((self, styles) => {
    return {
      self,
      styles
    }
  }, styles_)
}
