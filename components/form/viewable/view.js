export default function create({h, uuid, children}) {
  const mounts = children.map(function onMap(childrenComponents) {
    return Object.keys(childrenComponents)
    .reduce(function onReduce(acc, childName) {
      const id = uuid.v4()
      console.log(id)
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

  const view = mounts.map(function onMap(mountsObject) {
    return h('div',
      Object.keys(mountsObject).map(function onMapObjToArr(mountKey) {
        return mountsObject[mountKey].node
      })
    )
  })

  return {
    view,
    mounts
  }
}
