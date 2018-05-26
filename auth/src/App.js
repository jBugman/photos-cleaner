import React, { Component } from 'react'
import { GoogleAuthorize } from 'react-google-authorize'
import { CopyToClipboard } from 'react-copy-to-clipboard'
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
      <div className='App'>
        {!this.state.loggedIn &&
          <ClientId onClientId={this.onClientId} className='row' />
        }
        {!this.state.loggedIn && this.state.clientId &&
          <GoogleAuthorize
            clientId={this.state.clientId}
            buttonText='[Sign In]'
            className='row' // TODO: conform to branding guidelines
            onSuccess={this.googleSuccess}
            onFailure={this.googleFailure}
            responseType='code'
          // prompt='select_account'
          />
        }
        {this.state.loggedIn && this.state.code &&
          <Code code={this.state.code} className='row' />
        }
      </div>
    )
  }
}

const Code = ({ code, className }) =>
  <div className={className}>
    <span>
      Code: {code}
    </span>
    <CopyToClipboard text={code}>
      <button>Copy</button>
    </CopyToClipboard>
  </div>

class ClientId extends Component {
  state = {
    value: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onClientId(this.state.value)
  }

  onChange = (e) => this.setState({ value: e.target.value })

  render = () =>
    <form onSubmit={this.onSubmit} className={this.props.className} >
      <input type='text' className='clientId' value={this.state.value} onChange={this.onChange} />
      <button type='submit'>
        Create the button
      </button>
    </form>
}

export default App
export { Code, ClientId }
