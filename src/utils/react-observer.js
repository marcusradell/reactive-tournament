// Stolen from http://michalzalecki.com/use-rxjs-with-react/

import React from 'react'

export default function create ({state$, Render}) {
  return class ReactObserver extends React.Component {
    componentWillMount () {
      this.subscription = state$.subscribe({
        next: (stateData) => {
          this.setState(stateData)
        }
      })
    }

    componentWillUnmount () {
      this.subscription.unsubscribe()
    }

    render () {
      return (
        this.state &&
        <Render state={this.state} />
      )
    }
  }
}
