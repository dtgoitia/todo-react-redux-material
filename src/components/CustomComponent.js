import React from 'react';

// Material UI
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default () => (
  <div style={{border: '1px solid blue'}}>
    <h1>CustomComponent</h1>
    <MuiThemeProvider>
      <RaisedButton label='Submit' primary />
    </MuiThemeProvider>
  </div>
);