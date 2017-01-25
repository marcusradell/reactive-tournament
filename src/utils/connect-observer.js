// Stolen from http://michalzalecki.com/use-rxjs-with-react/

import React from 'react'

export default function create ({state_, view: View}) {
  return class ConnectObserver extends React.Component {
    componentDidMount () {
      this.subscription = state_.subscribe({
        next: (data) => {
          this.setState({data})
        }
      })
    }

    componentWillUnmount () {
      this.subscription.unsubscribe()
    }

    render () {
      return (
        this.state &&
        <View state={this.state.data} />
      )
    }
  }
}
