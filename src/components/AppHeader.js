import React from 'react';
import AppBar from 'material-ui/AppBar';

class AppHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <AppBar
        title="TO-duh"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onTitleClick={this.props.handleDrawer}
      />
    );
  }
}

export default AppHeader;