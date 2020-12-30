import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, IconButton, Link, List, ListItem, ListItemText } from '@material-ui/core'
import { Home, Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'

const links = [
  { title: 'Home', path: '/' },
  { title: 'Upload', path: '/upload' }
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navFlex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Home />
          </IconButton>
          <List className={classes.navFlex} component="nav" aria-labelledby="main navigation">
            {links.map(({ title, path }) => (
              <ListItem button key={title} component={NavLink} to={path}>
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </header>)
}

export default Header