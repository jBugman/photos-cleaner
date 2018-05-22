import React, { Component } from 'react'
import './App.css'
import { GoogleLogin } from 'react-google-login'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class App extends Component {
  state = {
    clientId: null,
    code: null
  }

  onIdChange = (id) => this.setState({ clientId: id })

  googleFailure = (e) => console.log(e)

  googleSuccess = (e) => this.setState({ code: e.code })

  render () {
    return (
      <div className='App'>
        <ClientId onIdChange={this.onIdChange} />
        {this.state.clientId &&
          <GoogleLogin clientId={this.state.clientId}
            buttonText='Authorize'
            onSuccess={this.googleSuccess}
            onFailure={this.googleFailure}
            responseType='code'
          />
        }
        {this.state.code &&
          <Code code={this.state.code} />
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
    this.props.onIdChange(this.state.value)
  }

  onChange = (e) => this.setState({ value: e.target.value })

  render = () =>
    <form onSubmit={this.onSubmit}>
      <input type='text' value={this.state.value} onChange={this.onChange} />
      <button type='submit'>
        Create the button
      </button>
    </form>
}

export default App
