import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@mui/material';
import Header from './components/Header';
import store from './redux/store';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
//import PostForm from './components/PostForm';

function App() {
  return (
    <Container>
    <Provider store={store}>
      <div className="App">
      <Header />
        <AddPost />
        <PostList />
      </div>
    </Provider>
    </Container>
  );
}

export default App;
