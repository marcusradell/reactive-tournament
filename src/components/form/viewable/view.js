export default function create ({
  h,
  mostCombineArray,
  childViews
}) {
  return mostCombineArray(function onCombine (...childVNodes) {
    return h('div',
      [...childVNodes]
    )
  }, childViews)
}
