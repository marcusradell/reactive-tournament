import RouterModel from '../components/router'
import Router from '../components/router/viewable'

export default function create ({provider}) {
  const routerModel = RouterModel({provider})
  return Router({model: routerModel})
}
