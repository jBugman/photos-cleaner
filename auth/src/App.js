import React, { Component } from 'react'
import './App.css'
import { GoogleLogin } from 'react-google-login'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class App extends Component {
  state = {
    clientId: null,
    code: null
  }

  onClientId = (id) => this.setState({ clientId: id })

  googleFailure = (e) => console.log(e)

  googleSuccess = (resp) => this.setState({ code: resp.code })

  // TODO: fix random 'missing client_id'
  render () {
    return (
      <div className='App'>
        <ClientId onClientId={this.onClientId} className='row' />
        {this.state.clientId &&
          <GoogleLogin
            clientId={this.state.clientId}
            buttonText='[Sign In]'
            className='g-signin2 googleButton row' // TODO: conform to branding guidelines better
            onSuccess={this.googleSuccess}
            onFailure={this.googleFailure}
            responseType='code'
          />
        }
        {this.state.code &&
          <Code code={this.state.code} className='row' />
        }
      </div>
    )
  }
}

const Code = ({ code }) =>
  <div>
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
    <form onSubmit={this.onSubmit}>
      <input type='text' className='clientId' value={this.state.value} onChange={this.onChange} />
      <button type='submit'>
        Create the button
      </button>
    </form>
}

export default App
export { Code, ClientId }
