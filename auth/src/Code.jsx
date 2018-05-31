import React, { Component } from 'react'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import ContentCopy from '@material-ui/icons/ContentCopy'
import copy from 'copy-to-clipboard'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  code: {
    display: 'inline-block',
    marginRight: '8px', // TODO: fix hardcoded margin?
  },
})

// TODO: how to pass all props?
// TODO: withLabel?
const TitledIconButton = ({
  label,
  children,
  onClick = null,
  color = 'default',
}) => (
  <IconButton aria-label={label} title={label} onClick={onClick} color={color}>
    {children}
  </IconButton>
)

const CopyButton = ({ label, onClick }) => (
  <TitledIconButton label={label} onClick={onClick}>
    <ContentCopy />
  </TitledIconButton>
)

const CloseButton = ({ label, onClick }) => (
  <TitledIconButton label={label} onClick={onClick} color="inherit">
    <CloseIcon />
  </TitledIconButton>
)

class Code extends Component {
  state = {
    snackbarOpen: false,
  }

  onCopy = () => {
    const success = copy(this.props.code)
    if (success) {
      this.setState({ snackbarOpen: true })
    }
  }

  handleClose = () => this.setState({ snackbarOpen: false })

  copyLabel = 'Copy to clipboard'

  render = () => {
    const { code, classes } = this.props
    return (
      <CardContent>
        <Typography variant="caption">Code:</Typography>
        <Typography component="span" className={classes.code}>
          {code}
        </Typography>
        <CopyButton label={this.copyLabel} onClick={this.onCopy} />
        <Snackbar
          open={this.state.snackbarOpen}
          onClose={this.handleClose}
          autoHideDuration={2000}
          message={<span>Copied to clipboard</span>}
          action={<CloseButton label="Close" onClick={this.handleClose} />}
        />
      </CardContent>
    )
  }
}

export default withStyles(styles)(Code)
