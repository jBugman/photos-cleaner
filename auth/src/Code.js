import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

const Code = ({ code, classes }) =>
  <div className='row'>
    <span>
      Code: {code}
    </span>
    <CopyToClipboard text={code}>
      <button>Copy</button>
    </CopyToClipboard>
  </div>

export default withStyles(styles)(Code)
