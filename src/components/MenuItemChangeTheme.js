import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

export default class MenuItemChangeTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {darkTheme: this.props.darkTheme};
  }

  render() {
    return (
      <MenuItem>
        <Toggle
          label='Enable dark theme'
          labelPosition='right'
          onToggle={this.props.enableDarkTheme}
        />
      </MenuItem>
    );
  }
}