import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CssBaseline from '@material-ui/core/CssBaseline'

import ClientId from './ClientId'
import Auth from './Auth'
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

const Code = ({ code }) =>
  <div className='row'>
    <span>
      Code: {code}
    </span>
    <CopyToClipboard text={code}>
      <button>Copy</button>
    </CopyToClipboard>
  </div>

export default App
export { Code }
