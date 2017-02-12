export default function create ({state_, colorThemeState_}) {
  return state_.combine((self, colorTheme) => {
    return {
      self,
      colorTheme
    }
  }, colorThemeState_)
}
