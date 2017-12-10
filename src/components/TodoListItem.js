import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const TodoListItem = ({ onClick, completed, text }) => (
  <ListItem>
    <Checkbox
      label={text}
      checked={completed}
      labelStyle={{
        color: completed ? 'grey' : null,
        textDecoration: completed ? 'line-through' : 'none'
      }}
      iconStyle={{fill: completed ? 'grey' : null}}
      onCheck={onClick}
    />
  </ListItem>
);

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoListItem;