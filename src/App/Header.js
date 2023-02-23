import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles, } from '@material-ui/core'
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme => ({  // rather than use plane css use theme
  root: {
    backgroundColor: '#ffff',
    // transform: 'translateZ(0)' // this for z index of header  // no need here we override in App.js
  },
  searchInput: {
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}px`,  // if we pass double value use px  for single value no need px
    fontSize: '0.8 rem',
    '&:hover': {
      backgroundColor: "#f2f2f2"
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1)   // 1=8 px for 12 pass 1.5 => 1.5*8=12px
    }
  }
}))
export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container
          alignItems='center'
        >
          <Grid item>
            <InputBase
              placeholder='Search Here'
              startAdornment={<SearchIcon fontSize='small' />}
              className={classes.searchInput}
            />
          </Grid>{/* this is first grid it take space whatever want for this child*/}
          <Grid item sm></Grid>{/* this is second grid it take only rest of space */}
          <Grid item>{/* this is Third grid it take space whatever want for this child*/}
            <IconButton>
              <Badge badgeContent={4} color="secondary" overlap="rectangular">  {/*  here I used  overlap for remove warning from crome but i don't know why? */}
                <NotificationsNoneIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary" overlap="rectangular" >
                <ChatBubbleOutlineIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize='small' />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
