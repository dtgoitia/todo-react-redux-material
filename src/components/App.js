import React from 'react';

// Material UI
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppHeader from './AppHeader';
import LeftMenu from './LeftMenu';
import TodoInput from './TodoInput';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      drawerOpen: false,
      darkTheme: false
    }
    this.handleDrawer = this.handleDrawer.bind(this);
    this.enableDarkTheme = this.enableDarkTheme.bind(this);
  }

  handleDrawer() {
    this.setState({drawerOpen: !this.state.drawerOpen});
  }

  enableDarkTheme() {
    this.setState({darkTheme: !this.state.darkTheme});
  }

  render(){
    return(
      <MuiThemeProvider muiTheme={
        this.state.darkTheme
          ? getMuiTheme(darkBaseTheme)
          : getMuiTheme(lightBaseTheme)
      }>
        <div>
          <AppHeader handleDrawer={this.handleDrawer} />
          <LeftMenu
            open={this.state.drawerOpen}
            handleDrawer={this.handleDrawer}
            darkTheme={this.state.darkTheme}
            enableDarkTheme={this.enableDarkTheme}
            />
          <TodoInput />
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;