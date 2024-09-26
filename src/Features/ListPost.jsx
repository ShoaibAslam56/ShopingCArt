import React from 'react';
import { useSelector } from 'react-redux';
import TimeAgo from './TimeAgo'
export default function ListPost() {
  const posts = useSelector(state => state.post);


  return (
        <div className="container">
          <div className="row">  
              {posts.map(post => (
      <div key={post.id} className='col-lg-4' >
              <img
                src={post.image}
                alt={post.title}
                className="img-fluid"
              />
            <h3>{post.Price}</h3>
            <h5>{post.title}</h5>
            <h6>{post.content}</h6>
            <i><TimeAgo/></i>
          </div>
    ))}
          </div>
        </div>
  );
}
