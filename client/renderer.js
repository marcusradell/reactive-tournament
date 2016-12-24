export default function create ({patch, domElm, view}) {
  view
  .scan(function onScan (elm, nextElm) {
    patch(elm, nextElm)
    return nextElm
  }, domElm)
  .drain()
}
