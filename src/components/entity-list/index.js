export default function create ({provider, entityType}) {
  const labels = {
    entityType
  }

  const state_ = provider.entityServices[entityType].state_

  return {
    labels,
    state_
  }
}
