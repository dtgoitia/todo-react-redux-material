import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

const AppHeader = ({handleDrawer}) => (
  <AppBar
    title="TO-duh"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonClick={handleDrawer}
    onTitleClick={handleDrawer}
    onRightIconButtonClick={handleDrawer}
  />
);

AppHeader.propTypes = {
  handleDrawer: PropTypes.func.isRequired
};

export default AppHeader;