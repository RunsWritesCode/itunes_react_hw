import React from 'react';

const Song = (props) => {
  if (!props.title) return null;
  return (
    <div id="song-item">
    <div id="row">
      <div id="column">
      <p id="number">
        Number {props.chartPosition}
      </p>
    </div>
    <div id="column">
      <p id="title">
        {props.title}
      </p>
        </div>
    </div>
  <div id="column">
      <p>
        {props.artist}
      </p>
    </div>
    <div id="row">
      <img src={props.image}/>
    </div>
      <div id="preview">
      <a href={props.preview}>Preview</a>
    </div>
    </div>
  )
}

export default Song;
