import React from 'react';

const Song = (props) => {
  if (!props.title) return null;
  return (
    <div>
      <p>
        {props.chartPosition}
      </p>
      <p id="title">
        {props.title}
      </p>
      <p>
        {props.artist}
      </p>
      <img src={props.image}/>
      <a href={props.preview}>Preview</a>
    </div>
  )
}

export default Song;
