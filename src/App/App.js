
import './App.css';
import SideMenu from '../components/SideMenu';
import { createTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core'
import Header from './Header';
import Employees from '../pages/Employess/Employees';

// One advantage of this theme as user can choose theme, first no them that is null array and then we programmatically change them as user response
const theme = createTheme({  // here we created theme and provide to provider 
  palette: {         // palette enables you to modify the color of the components to suit your brand
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    },
  },
  shape: {
    borderRadius: '12px'
  },
  overrides: {    // AppBar Api // we want to override the header effect on every page so we override here.
    // with overrides property we can change rule of components
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  // with prop property we can change the rule of api prop of material ui AppBar Api
  // suppose we need to change default behavior of button so we use prop 
  // for that we go IconButton Api and find the class name that is. MuiIconButton and apply custom effects.
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }

})
const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
});
function App() {
  const classes = useStyles();
  return (

    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain} >
        <Header />
        <Employees />
      </div>
      {/* cssbase line for add common css rule like box-sizing:border-box */}
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
