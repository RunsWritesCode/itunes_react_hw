import React from 'react';

const Song = (props) => {
  if (!props.title) return null;
  return (
    <div>
      <h2>
        {props.title}
      </h2>
    </div>
  )
}

export default Song;
