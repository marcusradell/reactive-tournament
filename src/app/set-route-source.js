export default function create ({
  mostFromEvent,
  eventSource,
  eventName,
  selectPath
}) {
  return mostFromEvent(eventName, eventSource)
  .map(function onMap () {
    return selectPath()
  })
}
