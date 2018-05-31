import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { defaultProps } from 'recompose'

const Folders = ({ folders }) => (
  <List component="nav">
    {folders.map(folder => <Folder key={folder.id} folder={folder} />)}
  </List>
)

const Folder = ({ folder }) => (
  <ListItem button>
    <ListItemText primary={folder.name} />
  </ListItem>
)

// TODO: real data for folders
const testData = [
  { id: 'qwe', name: 'Album 1' },
  { id: '123', name: 'Cat pics' },
  { id: 'asd', name: 'MEMES' },
]

export default defaultProps({ folders: testData })(Folders)
