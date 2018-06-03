import React from 'react'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import { GoogleAuthorize } from 'react-google-authorize'
import { withStyles } from '@material-ui/core/styles'

// TODO: learn to use themes
const styles = () => ({
  signIn: {
    margin: '0 auto',
  },
})

// TODO: conform to branding guidelines
// TODO: fix randomly self-closing popup
const Auth = ({ clientId, onSuccess, onFailure, classes }) => (
  <React.Fragment>
    <CardActions>
      <GoogleAuthorize
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        fetchBasicProfile={false}
        responseType="code"
        tag="div"
        className={classes.signIn}
      >
        <Button variant="raised" color="secondary">
          Sign In
        </Button>
      </GoogleAuthorize>
    </CardActions>
  </React.Fragment>
)

export default withStyles(styles)(Auth)
