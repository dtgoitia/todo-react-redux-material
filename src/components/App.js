import React from 'react';
import Footer from './Footer';
import CustomComponent from './CustomComponent';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <CustomComponent />
  </div>
)

export default App;