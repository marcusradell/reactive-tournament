export default function create({h, uuid, children}) {
  const mounts = children.map(function onMap(childrenComponents) {
    return Object.keys(childrenComponents)
    .reduce(function onReduce(acc, childName) {
      const id = uuid.v4()
      console.log('generated id:', id)
      acc[childName] = {
        node: h('div',
          {props: {
            id
          }},
          `${childName} placeholder`
        ),
        id
      }
      return acc
    }, {})
  })
  .multicast()

  const view = mounts.map(function onMap(mountsObject) {
    return h('div',
      Object.keys(mountsObject).map(function onMapObjToArr(mountKey) {
        console.log('form view mount id:', mountsObject[mountKey].id)
        return mountsObject[mountKey].node
      })
    )
  })

  return {
    view,
    mounts
  }
}
