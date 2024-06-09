import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postSlice';
import { TextField, TextareaAutosize, Button, Typography, Box } from '@mui/material';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ id: Date.now(), title, content }));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Add Post
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
     <Box component="form" noValidate autoComplete="on">
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        margin="normal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        multiline
        rows={4} // Initial number of rows
        rowsMax={10} // Optional: Maximum number of rows
      />
    </Box>
      <Button type="submit" variant="contained" color="primary">
        Add Post
      </Button>
    </form>
  );
};

export default AddPost;
