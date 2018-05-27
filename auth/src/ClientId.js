import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  action: {
    marginLeft: 'auto',
    order: 2
  }
})

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
      <React.Fragment>
        <CardContent>
          <TextField
            required
            fullWidth
            id='required'
            label='Client ID'
            value={this.state.value}
            margin='normal'
            onChange={this.onChange} />
        </CardContent>
        <CardActions>
          <Button color='primary' type='submit' className={this.props.classes.action}>
            Create auth button
          </Button>
        </CardActions>
      </React.Fragment>
    </form>
}

export default withStyles(styles)(ClientId)
