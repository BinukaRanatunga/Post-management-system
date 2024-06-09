import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../redux/postSlice";
import { TextField, TextareaAutosize, Button, Box } from "@mui/material";

const EditPost = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost({ id: post.id, title, content }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Box component="form" noValidate autoComplete="off">
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
            Save
          </Button>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
        </form>
      ) : (
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      )}
    </div>
  );
};

export default EditPost;
