import React, { Component } from 'react';
import Song from './Song';

class SongList extends Component {

  render() {

    const songNodes = this.props.songs.map( song => {

      return (
        <Song title={song.title.label} key={song.id}>
          { song.title.label }
        </Song>
      )

    })

    return <div className="SongList"> {songNodes} </div>
  }
}

export default SongList;
