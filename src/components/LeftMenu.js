import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuItemChangeTheme from './MenuItemChangeTheme'

export default class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: this.props.open};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <Drawer
          open={this.props.open}
          docked={false}
          onRequestChange={(a, b, c) => this.props.handleDrawer()}
        >
          <MenuItem onClick={this.props.handleDrawer}>Menu Item</MenuItem>
          <MenuItem onClick={this.props.handleDrawer}>Menu Item 2</MenuItem>
          <MenuItemChangeTheme
            darkTheme={this.props.darkTheme}
            enableDarkTheme={this.props.enableDarkTheme}
          />
        </Drawer>
      </div>
    );
  }
}