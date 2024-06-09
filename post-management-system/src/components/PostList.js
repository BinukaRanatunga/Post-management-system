import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../redux/postSlice';
import EditPost from './EditPost';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(`Deleting post with id: ${id}`); // Log the id of the post being deleted
    dispatch(deletePost(id));
  };

  console.log('Posts:', posts); // Log the posts before rendering

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Post List
      </Typography>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id} alignItems="flex-start">
            <ListItemText
              primary={post.title}
              secondary={post.content}
            />
            <EditPost post={post} />
            <Button onClick={() => handleDelete(post.id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PostList;
