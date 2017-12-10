import React from 'react';
import TextField from 'material-ui/TextField';

export default class TodoInput extends React.Component {
  render(){
    return (
      <TextField
        hintText="Hint Text"
        floatingLabelText="Floating Label Text"
      />
    )
  }
};