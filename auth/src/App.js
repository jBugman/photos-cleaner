import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Auth from './Auth'
import ClientId from './ClientId'
import Code from './Code'
import './App.css'

class App extends Component {
  state = {
    clientId: null,
    code: null,
    loggedIn: false
  }

  onClientId = (id) => this.setState({ clientId: id })

  googleFailure = (e) => console.log(e)

  googleSuccess = (resp) => this.setState({
    code: resp.code,
    loggedIn: true
  })

  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        {!this.state.loggedIn &&
          <React.Fragment>
            <ClientId onClientId={this.onClientId} />
            {this.state.clientId &&
              <Auth
                clientId={this.state.clientId}
                onSuccess={this.googleSuccess}
                onFailure={this.googleFailure} />
            }
          </React.Fragment>
        }
        {this.state.loggedIn && this.state.code &&
          <Code code={this.state.code} />
        }
      </React.Fragment>
    )
  }
}

export default App
