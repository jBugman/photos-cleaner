import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ContentCopy from '@material-ui/icons/ContentCopy'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  code: {
    display: 'inline-block',
    marginRight: '8px' // TODO: fix hardcoded margin?
  }
})

// TODO: snackbar
const Code = ({ code, classes }) => {
  const copyLabel = 'Copy to clipboard'
  return (
    <CardContent>
      <Typography variant='caption'>
        Code:
      </Typography>
      <Typography component='span' className={classes.code}>
        {code}
      </Typography>
      <CopyToClipboard text={code} >
        <IconButton aria-label={copyLabel} title={copyLabel}>
          <ContentCopy />
        </IconButton>
      </CopyToClipboard>
    </CardContent>
  )
}

export default withStyles(styles)(Code)
