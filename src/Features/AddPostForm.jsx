import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./FeatureSlice";

export default function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [Price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onPriceChange = (e) => setPrice(e.target.value) ;
  const onImageChange = (e) => setImage(e.target.files[0]);

  const canSave = Boolean(title) && Boolean(content) && Boolean(Price) && Boolean(image);

  const SavePost = () => {
    if (canSave) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(
          addPost({
            id: nanoid(),
            title,
            content,
            Price,
            image: reader.result,
            date: new Date().toISOString(),
          })
        );
        setTitle("");
        setContent("");
        setPrice("");
        setImage(null);
      };
      if (image) {
        reader.readAsDataURL(image);
      } else {
        dispatch(
          addPost({
            id: nanoid(),
            title,
            content,
            Price,
            image: null,
            date: new Date().toISOString(),
          })
        );
        setTitle("");
        setContent("");
        setPrice("");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <h1 className="text-center">Add Posts</h1>
        <div className="col-lg-10">
          <div className="row">
          <div className="col-lg-6">
              <label htmlFor="Price">Price</label>
              <input
                className="form-control"
                type="number"
                name="Price"
                id="Price"
                value={Price}
                onChange={onPriceChange}
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="title">Post Title:</label>
              <input
                className="form-control"
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={onTitleChange}
              />
            </div>
            <div className="col-lg-12">
              <label htmlFor="content">Post Content:</label>
              <textarea
                name="content"
                rows="6" 
                id="content"
                className="form-control"
                value={content}
                onChange={onContentChange}
              />
            </div>
            
            <div className="col-lg-12">
              <label htmlFor="image">Post Image</label>
              <input
                className="form-control"
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={onImageChange}
              />
            </div>
            <div className="col-lg-12 d-flex justify-content-center">
              <button type="button" className="btn btn-success mt-3 mb-3" onClick={SavePost} disabled={!canSave}>
                Save Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
