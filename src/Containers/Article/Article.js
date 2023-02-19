import React from 'react';
import './Article.css';
import { useLocation } from 'react-router-dom';

function Article() {

  const location = useLocation();



  return (
    <div className='article-content'>
      <h2>Votre article: {location.state.title}</h2>
      <p>{location.state.body}</p>
    </div>
  )
}

export default Article