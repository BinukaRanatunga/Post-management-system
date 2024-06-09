import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: JSON.parse(localStorage.getItem('posts')) || []
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    editPost(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
        localStorage.setItem('posts', JSON.stringify(state.posts));
      }
    },
    deletePost(state, action) {
      state.posts = state.posts.filter(post => post.id !== action.payload);
      localStorage.setItem('posts', JSON.stringify(state.posts));
    }
  }
});

export const { addPost, editPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
